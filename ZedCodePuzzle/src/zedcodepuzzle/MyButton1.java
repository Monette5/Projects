package zedcodepuzzle;

import java.awt.Color;
import java.awt.Image;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.util.List;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JButton;

/**
 *
 * @author Ghomez
 */
public class MyButton1 extends JButton {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private boolean isLastButton;

    public MyButton1() {

        super();

        initUI();
    }

    public MyButton1(Image image) {

        super(new ImageIcon(image));

        initUI();
    }

    private void initUI() {

        isLastButton = false;
        BorderFactory.createLineBorder(Color.gray);

        addMouseListener(new MouseAdapter() {

            @Override
            public void mouseEntered(MouseEvent e) {
                setBorder(BorderFactory.createLineBorder(Color.yellow));
            }

            @Override
            public void mouseExited(MouseEvent e) {
                setBorder(BorderFactory.createLineBorder(Color.gray));
            }
        });
    }

    public void setLastButton() {
        
        isLastButton = true;
    }

    public boolean isLastButton() {

        return isLastButton;
    }

     @SuppressWarnings("rawtypes")
	public static boolean compareList(List ls1, List ls2) {
        return ls1.toString().contentEquals(ls2.toString());
    }

//    public static void main(String[] args) {
//
//        EventQueue.invokeLater(new Runnable() {
//
//            @Override
//            public void run() {
//                PuzzleEx puzzle = new PuzzleEx();
//                puzzle.setVisible(true);
//            }
//        });
//    }
    
    
}

