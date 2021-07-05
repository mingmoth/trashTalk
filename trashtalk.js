const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function pickItem(array) {
  let index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generatetalk(targets) {
  let trashtalk = ''
  if (targets === 'engineer') {
    trashtalk += `身為一個工程師, ${pickItem(task[targets])} ${pickItem(phrase)}吧`
  } else if (targets === 'designer') {
    trashtalk += `身為一個設計師, ${pickItem(task[targets])} ${pickItem(phrase)}吧`
  } else if (targets === 'entrepreneur') {
    trashtalk += `身為一個創業家, ${pickItem(task[targets])} ${pickItem(phrase)}吧`
  }  else {
    trashtalk = '請選取想要祝福的對象喲'
  }
  return trashtalk
}



module.exports = generatetalk