<template>
 <v-row>
   <v-col cols="12" sm="12" md="12" class="app-pokemon">
      <v-col cols="5" sm="6" md="4" class="card" >
          <v-textarea outlined label="String Inicial" v-model="stringInput" placeholder="Insira a string aqui..." rows="15"></v-textarea>
          <v-btn @click="Splittar()" color="primary" > Splitar </v-btn>
      </v-col>
      <v-col cols="5" sm="6" md="4" class="card" >
          <v-textarea outlined label="Resultado" v-model="stringFinal" placeholder="Resultado" rows="15"></v-textarea>
          <v-btn @click="Clear()" color="primary"> Limpar </v-btn>
      </v-col>
   </v-col>
 </v-row>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class Home extends Vue {

  private stringInput: any = null;
  private stringFinal: any = '';
  private isLoading: boolean = false;

  public async Splittar(): Promise<void>{
      let delimitter = 0;
      const stringOutput = await this.stringInput.split(';')
      for(var i = 0; i < stringOutput.length; i++){
        if(stringOutput[delimitter] !== undefined){
          this.stringFinal = this.stringFinal + stringOutput[delimitter]
        }
        delimitter = delimitter + 3; 
      }
  }

  public Clear(): void{
    this.stringInput = null;
    this.stringFinal = '';
  }
}
</script>
<style scoped>
.app-pokemon{
  display:flex;
  flex-direction:row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 85vh;
  margin-top: 2%;
  margin-left: 3%;
  padding-right: 6%;
}

.app-pokemon .card{
  display:flex;
  flex-direction:column;
  height: 90%;
  cursor: pointer;
}

.app-pokemon .card:hover{
  background: white;
  opacity: 0.8;
}


.app-pokemon .card .details{
  display:flex;
  flex-direction:column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 100%;
}

.app-pokemon .card .details .details-pokemon{
  display:flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

</style>
