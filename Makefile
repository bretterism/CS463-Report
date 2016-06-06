FILE = CS463_Group03_Final_Report

all:
	# latex $(FILE).tex
	# latex $(FILE).tex
	# dvipdf $(FILE).dvi
	pdflatex $(FILE).tex
	pdflatex $(FILE).tex
disp:
	evince $(FILE).pdf &

clean:
	rm -f *.aux *.dvi *.log *.out