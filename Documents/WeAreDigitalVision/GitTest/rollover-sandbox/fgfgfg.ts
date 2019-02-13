import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UserContact from '../models/usercontact';
import EmailContactLog from '../models/emailcontactlog';

import BaseCtrl from './base';
var crypto = require('crypto');
var nodemailer = require('nodemailer');
var mongoose = require('mongoose');

var transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ahankumardots@gmail.com',
    pass: 'ahan@12345'
  }
});

export default class UserContactCtrl extends BaseCtrl {

  model = UserContact;
  emaillogmodal = EmailContactLog;

  getUserContact = (req, res) => {
    this.model.find(
      { customer_id: req.params.customer_id, is_deleted: 0 },
      { email: 1 }
    ).
      lean().
      exec(function (err, data) {
        if (err) {
          res.render('error', {
            status: 500
          });
        } else {
          res.send(data);
        }
      });
  }

  searchContacts = (req, res) => {
    this.model.find(
      {
        user_id: req.params.customer_id,
        is_deleted: 0,
        $or: [
          { "company": { $regex: req.params.keyword } },
          { "first_name": { $regex: req.params.keyword } }
        ]
      },
      { email: 1, company: 1, first_name:1,last_name:1}
    ).
      lean().
      exec(function (err, data) {
        if (err) {
          res.render('error', {
            status: 500
          });
        } else {
          res.send(data);
        }
      });

  }

  sendEmailContact= (req, res) => {
    var finalmessage = "";
    let message = "";
    const email     = req.body.email;
    console.log(req.body);
    if(req.body.message!=undefined){
      message   = req.body.message;
    }
    const name      = req.body.name;
    const subject   = req.body.subject;
    let emailArr =  email.split(',');
    
    if(emailArr.length>0){

      var emaillog = {
        title:req.body.subject,
        emailtime:req.body.emailtime,
        file_id:req.body.file_id,
        category_id:req.body.category_id,
        product_id:req.body.product_id,
        ip_address:req.body.ip_address
      }
      const obj = new this.emaillogmodal(emaillog);
      
      obj.save((err, item) => {
        if (err && err.code === 11000) {
          res.sendStatus(400);
        }
        if (err) {
          return console.error(err);
        }
		
		 var productlink = "http://34.205.46.236:3002/site/email_file_page/"+(item._id);
		  
		 finalmessage += "<center style='width: 100%;'><table align='center' role='sendemailcontacts' cellspacing='0' cellpadding='0' border='0' width='600' style='margin: 0 auto;'><tr><td style='background-color: #ffffff;'><table role='presentation' cellspacing='0' cellpadding='0' border='0' width='100%'><tr><td style='padding: 20px; font-family: sans-serif; font-size: 15px; line-height: 20px; color: #555555;'>";
		
		 finalmessage +=  "<div style='margin: 0 0 10px;'>"+Message+"</div>";
		
		 finalmessage +=  "<h4>Please check below products by clicking on links</h4> <ul style='padding: 0; margin: 0; list-style-type: disc;'>";
		
		 finalmessage +=  "<li style='margin:0 0 10px 20px;'><a href='"+productlink+"'>Show Product</a></li>";
		
		 finalmessage +=  "</ul></td></tr></table></td></tr></table></center>";
	
      
        for(let e in emailArr){
        
          var mailOptions = {
            from: '"ahankumar dots" <ahankumardots@gmail.com>', 
            to: emailArr[e],
            subject: subject, 
            text: finalmessage, 
            html: finalmessage 
          }
          console.log(mailOptions);
          transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
              res.json({ success: false, message: 'Something went wrong' });
            } else {
              console.log('Message sent: ' + info.response);
              res.json({ success: true, message: 'Please check your inbox to get product links' });
            }
          });
        }
        res.json({ success: true, message: 'Please check your inbox to get product links' });
     });
    }
  }


  getEmailLog = (req, res) => {
    this.emaillogmodal.findOne(
      { _id: req.params.id},
      { file_id: 1, category_id:1,product_id:1,ip_address:1,emailtime:1}
    ).
      lean().
      exec(function (err, data) {
        if (err) {
          res.render('error', {
            status: 500
          });
        } else {
          res.send(data);
        }
      });
  }

  
	getCountContacts = (req, res) => {
		this.model.count(
			{
				customer_id: req.params.customer_id,
				is_deleted: 0,
				is_active: 1
			}

		).exec(function (err, count) {
			if (err) {
				res.render('error', {
					status: 500
				});
			} else {
				if (count != null && count != undefined) {
					res.send({ count });
				} else {
					res.send({ "count": 0 });
				}
			}
		});
  }
  
  getContacts = (req, res) => {
    let query; 
		let sortBy = "first_name";
    let sortOrder = -1;

    if(req.params.filtervalue!="all"){
      query = this.model.find(
        { customer_id: req.params.customer_id, is_deleted: 0, is_active: 1 , 
          $or: [
          { "company": {$regex:new RegExp(req.params.filtervalue, "ig") } },
          { "first_name":{$regex:new RegExp(req.params.filtervalue, "ig") } }
        ]},
        { first_name: 1, last_name: 1 ,email:1,phone:1,company:1}
      );
    }else{
      query = this.model.find(
        { customer_id: req.params.customer_id, is_deleted: 0, is_active: 1 },
        { first_name: 1, last_name: 1 ,email:1,phone:1,company:1}
      );
    }
		query.sort({ [sortBy]: sortOrder }).exec(function (err, data) {
				if (err) {
					res.render('error', {
						status: 500
					});
				} else {
					res.send(data);
				}
			});
	}


}