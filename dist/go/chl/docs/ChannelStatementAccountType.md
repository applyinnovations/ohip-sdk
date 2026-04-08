# ChannelStatementAccountType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProfileId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AccountCode** | Pointer to **string** | Holds Account code of the channel account statement. | [optional] 
**ContractId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**BeginDate** | Pointer to **string** | Holds begin date of the account statement. | [optional] 
**EndDate** | Pointer to **string** | Holds end date of the account statement. | [optional] 
**Note** | Pointer to **string** | Holds Note for the account statement. | [optional] 
**TotalDetailsAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ChannelAccountStatementDetails** | Pointer to [**[]ChannelStatementDetailType**](ChannelStatementDetailType.md) | Provides detailed information regarding Channel Account statements. | [optional] 

## Methods

### NewChannelStatementAccountType

`func NewChannelStatementAccountType() *ChannelStatementAccountType`

NewChannelStatementAccountType instantiates a new ChannelStatementAccountType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelStatementAccountTypeWithDefaults

`func NewChannelStatementAccountTypeWithDefaults() *ChannelStatementAccountType`

NewChannelStatementAccountTypeWithDefaults instantiates a new ChannelStatementAccountType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProfileId

`func (o *ChannelStatementAccountType) GetProfileId() UniqueIDType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *ChannelStatementAccountType) GetProfileIdOk() (*UniqueIDType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *ChannelStatementAccountType) SetProfileId(v UniqueIDType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *ChannelStatementAccountType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetAccountCode

`func (o *ChannelStatementAccountType) GetAccountCode() string`

GetAccountCode returns the AccountCode field if non-nil, zero value otherwise.

### GetAccountCodeOk

`func (o *ChannelStatementAccountType) GetAccountCodeOk() (*string, bool)`

GetAccountCodeOk returns a tuple with the AccountCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCode

`func (o *ChannelStatementAccountType) SetAccountCode(v string)`

SetAccountCode sets AccountCode field to given value.

### HasAccountCode

`func (o *ChannelStatementAccountType) HasAccountCode() bool`

HasAccountCode returns a boolean if a field has been set.

### GetContractId

`func (o *ChannelStatementAccountType) GetContractId() UniqueIDType`

GetContractId returns the ContractId field if non-nil, zero value otherwise.

### GetContractIdOk

`func (o *ChannelStatementAccountType) GetContractIdOk() (*UniqueIDType, bool)`

GetContractIdOk returns a tuple with the ContractId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContractId

`func (o *ChannelStatementAccountType) SetContractId(v UniqueIDType)`

SetContractId sets ContractId field to given value.

### HasContractId

`func (o *ChannelStatementAccountType) HasContractId() bool`

HasContractId returns a boolean if a field has been set.

### GetBeginDate

`func (o *ChannelStatementAccountType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ChannelStatementAccountType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ChannelStatementAccountType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ChannelStatementAccountType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ChannelStatementAccountType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelStatementAccountType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelStatementAccountType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelStatementAccountType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetNote

`func (o *ChannelStatementAccountType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ChannelStatementAccountType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ChannelStatementAccountType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ChannelStatementAccountType) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetTotalDetailsAmount

`func (o *ChannelStatementAccountType) GetTotalDetailsAmount() CurrencyAmountType`

GetTotalDetailsAmount returns the TotalDetailsAmount field if non-nil, zero value otherwise.

### GetTotalDetailsAmountOk

`func (o *ChannelStatementAccountType) GetTotalDetailsAmountOk() (*CurrencyAmountType, bool)`

GetTotalDetailsAmountOk returns a tuple with the TotalDetailsAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalDetailsAmount

`func (o *ChannelStatementAccountType) SetTotalDetailsAmount(v CurrencyAmountType)`

SetTotalDetailsAmount sets TotalDetailsAmount field to given value.

### HasTotalDetailsAmount

`func (o *ChannelStatementAccountType) HasTotalDetailsAmount() bool`

HasTotalDetailsAmount returns a boolean if a field has been set.

### GetChannelAccountStatementDetails

`func (o *ChannelStatementAccountType) GetChannelAccountStatementDetails() []ChannelStatementDetailType`

GetChannelAccountStatementDetails returns the ChannelAccountStatementDetails field if non-nil, zero value otherwise.

### GetChannelAccountStatementDetailsOk

`func (o *ChannelStatementAccountType) GetChannelAccountStatementDetailsOk() (*[]ChannelStatementDetailType, bool)`

GetChannelAccountStatementDetailsOk returns a tuple with the ChannelAccountStatementDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountStatementDetails

`func (o *ChannelStatementAccountType) SetChannelAccountStatementDetails(v []ChannelStatementDetailType)`

SetChannelAccountStatementDetails sets ChannelAccountStatementDetails field to given value.

### HasChannelAccountStatementDetails

`func (o *ChannelStatementAccountType) HasChannelAccountStatementDetails() bool`

HasChannelAccountStatementDetails returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


