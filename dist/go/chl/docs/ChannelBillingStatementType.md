# ChannelBillingStatementType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatementId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AccountCodeList** | Pointer to **[]string** |  | [optional] 
**StatementDate** | Pointer to **string** | Holds date on which statement is created. | [optional] 
**BeginDate** | Pointer to **string** | Holds begin date of the statement. | [optional] 
**EndDate** | Pointer to **string** | Holds end date of the statement. | [optional] 
**LockDate** | Pointer to **string** | Holds date on which statement is locked. | [optional] 
**Note** | Pointer to **string** | Holds Note for the statement. | [optional] 
**TotalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Generated** | Pointer to **bool** | Flag to identify Statements were generated or not. | [optional] 
**Dirty** | Pointer to **bool** | Flag to identify Statements generated were dirty or not. | [optional] 
**ChannelAccountStatements** | Pointer to [**[]ChannelStatementAccountType**](ChannelStatementAccountType.md) | Provides detailed information regarding Channel Account contract. | [optional] 

## Methods

### NewChannelBillingStatementType

`func NewChannelBillingStatementType() *ChannelBillingStatementType`

NewChannelBillingStatementType instantiates a new ChannelBillingStatementType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelBillingStatementTypeWithDefaults

`func NewChannelBillingStatementTypeWithDefaults() *ChannelBillingStatementType`

NewChannelBillingStatementTypeWithDefaults instantiates a new ChannelBillingStatementType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatementId

`func (o *ChannelBillingStatementType) GetStatementId() UniqueIDType`

GetStatementId returns the StatementId field if non-nil, zero value otherwise.

### GetStatementIdOk

`func (o *ChannelBillingStatementType) GetStatementIdOk() (*UniqueIDType, bool)`

GetStatementIdOk returns a tuple with the StatementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementId

`func (o *ChannelBillingStatementType) SetStatementId(v UniqueIDType)`

SetStatementId sets StatementId field to given value.

### HasStatementId

`func (o *ChannelBillingStatementType) HasStatementId() bool`

HasStatementId returns a boolean if a field has been set.

### GetAccountCodeList

`func (o *ChannelBillingStatementType) GetAccountCodeList() []string`

GetAccountCodeList returns the AccountCodeList field if non-nil, zero value otherwise.

### GetAccountCodeListOk

`func (o *ChannelBillingStatementType) GetAccountCodeListOk() (*[]string, bool)`

GetAccountCodeListOk returns a tuple with the AccountCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCodeList

`func (o *ChannelBillingStatementType) SetAccountCodeList(v []string)`

SetAccountCodeList sets AccountCodeList field to given value.

### HasAccountCodeList

`func (o *ChannelBillingStatementType) HasAccountCodeList() bool`

HasAccountCodeList returns a boolean if a field has been set.

### GetStatementDate

`func (o *ChannelBillingStatementType) GetStatementDate() string`

GetStatementDate returns the StatementDate field if non-nil, zero value otherwise.

### GetStatementDateOk

`func (o *ChannelBillingStatementType) GetStatementDateOk() (*string, bool)`

GetStatementDateOk returns a tuple with the StatementDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementDate

`func (o *ChannelBillingStatementType) SetStatementDate(v string)`

SetStatementDate sets StatementDate field to given value.

### HasStatementDate

`func (o *ChannelBillingStatementType) HasStatementDate() bool`

HasStatementDate returns a boolean if a field has been set.

### GetBeginDate

`func (o *ChannelBillingStatementType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ChannelBillingStatementType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ChannelBillingStatementType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ChannelBillingStatementType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ChannelBillingStatementType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelBillingStatementType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelBillingStatementType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelBillingStatementType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetLockDate

`func (o *ChannelBillingStatementType) GetLockDate() string`

GetLockDate returns the LockDate field if non-nil, zero value otherwise.

### GetLockDateOk

`func (o *ChannelBillingStatementType) GetLockDateOk() (*string, bool)`

GetLockDateOk returns a tuple with the LockDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockDate

`func (o *ChannelBillingStatementType) SetLockDate(v string)`

SetLockDate sets LockDate field to given value.

### HasLockDate

`func (o *ChannelBillingStatementType) HasLockDate() bool`

HasLockDate returns a boolean if a field has been set.

### GetNote

`func (o *ChannelBillingStatementType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ChannelBillingStatementType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ChannelBillingStatementType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ChannelBillingStatementType) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetTotalAmount

`func (o *ChannelBillingStatementType) GetTotalAmount() CurrencyAmountType`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *ChannelBillingStatementType) GetTotalAmountOk() (*CurrencyAmountType, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *ChannelBillingStatementType) SetTotalAmount(v CurrencyAmountType)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *ChannelBillingStatementType) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.

### GetGenerated

`func (o *ChannelBillingStatementType) GetGenerated() bool`

GetGenerated returns the Generated field if non-nil, zero value otherwise.

### GetGeneratedOk

`func (o *ChannelBillingStatementType) GetGeneratedOk() (*bool, bool)`

GetGeneratedOk returns a tuple with the Generated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerated

`func (o *ChannelBillingStatementType) SetGenerated(v bool)`

SetGenerated sets Generated field to given value.

### HasGenerated

`func (o *ChannelBillingStatementType) HasGenerated() bool`

HasGenerated returns a boolean if a field has been set.

### GetDirty

`func (o *ChannelBillingStatementType) GetDirty() bool`

GetDirty returns the Dirty field if non-nil, zero value otherwise.

### GetDirtyOk

`func (o *ChannelBillingStatementType) GetDirtyOk() (*bool, bool)`

GetDirtyOk returns a tuple with the Dirty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirty

`func (o *ChannelBillingStatementType) SetDirty(v bool)`

SetDirty sets Dirty field to given value.

### HasDirty

`func (o *ChannelBillingStatementType) HasDirty() bool`

HasDirty returns a boolean if a field has been set.

### GetChannelAccountStatements

`func (o *ChannelBillingStatementType) GetChannelAccountStatements() []ChannelStatementAccountType`

GetChannelAccountStatements returns the ChannelAccountStatements field if non-nil, zero value otherwise.

### GetChannelAccountStatementsOk

`func (o *ChannelBillingStatementType) GetChannelAccountStatementsOk() (*[]ChannelStatementAccountType, bool)`

GetChannelAccountStatementsOk returns a tuple with the ChannelAccountStatements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelAccountStatements

`func (o *ChannelBillingStatementType) SetChannelAccountStatements(v []ChannelStatementAccountType)`

SetChannelAccountStatements sets ChannelAccountStatements field to given value.

### HasChannelAccountStatements

`func (o *ChannelBillingStatementType) HasChannelAccountStatements() bool`

HasChannelAccountStatements returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


