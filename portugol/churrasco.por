programa {
	funcao inicio() {
		inteiro homem, mulher
		real carneh, carnem, cevah, cevam, carnet, cevat
		
		escreva("Insira quantidade de convidados(homens): ")
		leia(homem)
		escreva("Insira quantidade de convidadas(mulheres): ")
		leia(mulher)
		carneh=homem*0.35
		carnem=mulher*0.28
	    cevah=homem*2
	    cevam=mulher*1.5
	    carnet=carnem+carneh
	    cevat=cevam+cevah
	    escreva("Será nescessario ", carnet,"Kg de carne e ", cevat," Litros de cerveja")
	}
}