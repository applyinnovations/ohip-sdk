# ChannelAccountContractInformationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContractId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ContractNo** | Pointer to **string** | Holds contract No of the contract. | [optional] 
**BeginDate** | Pointer to **string** | Holds begin date of the contract. | [optional] 
**EndDate** | Pointer to **string** | Holds end date of the contract. | [optional] 
**Note** | Pointer to **string** | Holds Note for the account contract. | [optional] 
**ChannelAccountContractElements** | Pointer to [**[]ContractElementInformationType**](ContractElementInformationType.md) | Channel account contract elements information object to hold details of contract elements. | [optional] 
**MarkStatementsToRegenerate** | Pointer to **bool** | Flag to mark respective statements which were generated on these contracts to be regenerated. | [optional] 

## Methods

### NewChannelAccountContractInformationType

`func NewChannelAccountContractInformationType() *ChannelAccountContractInformationType`

NewChannelAccountContractInformationType instantiates a new ChannelAccountContractInformationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelAccountContractInformationTypeWithDefaults

`func NewChannelAccountContractInformationTypeWithDefaults() *ChannelAccountContractInformationType`

NewChannelAccountContractInformationTypeWithDefaults instantiates a new ChannelAccountContractInformationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetContractId

`func (o *ChannelAccountContractInformationType) GetContractId() UniqueIDType`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *ChannelAccountContractInformationType) GetContractIdOk() (*UniqueIDType, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *ChannelAccountContractInformationType) SetContractId(v UniqueIDType)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *ChannelAccountContractInformationType) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetContractNo

`func (o *ChannelAccountContractInformationType) GetContractNo() string`

GetContractNo returns the ContractNo field if non-nil, zero value otherwise.

### GetContractNoOk

`func (o *ChannelAccountContractInformationType) GetContractNoOk() (*string, bool)`

GetContractNoOk returns a tuple with the ContractNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractNo

`func (o *ChannelAccountContractInformationType) SetContractNo(v string)`

SetContractNo sets ContractNo field to given value.

### HasContractNo

`func (o *ChannelAccountContractInformationType) HasContractNo() bool`

HasContractNo returns a boolean if a field has been set.

### GetBeginDate

`func (o *ChannelAccountContractInformationType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ChannelAccountContractInformationType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ChannelAccountContractInformationType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ChannelAccountContractInformationType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ChannelAccountContractInformationType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelAccountContractInformationType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelAccountContractInformationType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelAccountContractInformationType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetNote

`func (o *ChannelAccountContractInformationType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ChannelAccountContractInformationType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ChannelAccountContractInformationType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ChannelAccountContractInformationType) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetChannelAccountContractElements

`func (o *ChannelAccountContractInformationType) GetChannelAccountContractElements() []ContractElementInformationType`

GetChannelAccountContractElements returns the ChannelAccountContractElements field if non-nil, zero value otherwise.

### GetChannelAccountContractElementsOk

`func (o *ChannelAccountContractInformationType) GetChannelAccountContractElementsOk() (*[]ContractElementInformationType, bool)`

GetChannelAccountContractElementsOk returns a tuple with the ChannelAccountContractElements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountContractElements

`func (o *ChannelAccountContractInformationType) SetChannelAccountContractElements(v []ContractElementInformationType)`

SetChannelAccountContractElements sets ChannelAccountContractElements field to given value.

### HasChannelAccountContractElements

`func (o *ChannelAccountContractInformationType) HasChannelAccountContractElements() bool`

HasChannelAccountContractElements returns a boolean if a field has been set.

### GetMarkStatementsToRegenerate

`func (o *ChannelAccountContractInformationType) GetMarkStatementsToRegenerate() bool`

GetMarkStatementsToRegenerate returns the MarkStatementsToRegenerate field if non-nil, zero value otherwise.

### GetMarkStatementsToRegenerateOk

`func (o *ChannelAccountContractInformationType) GetMarkStatementsToRegenerateOk() (*bool, bool)`

GetMarkStatementsToRegenerateOk returns a tuple with the MarkStatementsToRegenerate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMarkStatementsToRegenerate

`func (o *ChannelAccountContractInformationType) SetMarkStatementsToRegenerate(v bool)`

SetMarkStatementsToRegenerate sets MarkStatementsToRegenerate field to given value.

### HasMarkStatementsToRegenerate

`func (o *ChannelAccountContractInformationType) HasMarkStatementsToRegenerate() bool`

HasMarkStatementsToRegenerate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


