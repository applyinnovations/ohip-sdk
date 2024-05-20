# ChannelBillingStatementSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountCodeList** | Pointer to **[]string** |  | [optional] 
**BeginDate** | Pointer to **string** | Holds begin date of the statement. | [optional] 
**Dirty** | Pointer to **bool** | Flag to identify Statements generated were dirty or not. | [optional] 
**EndDate** | Pointer to **string** | Holds end date of the statement. | [optional] 
**Generated** | Pointer to **bool** | Flag to identify Statements were generated or not. | [optional] 
**LockDate** | Pointer to **string** | Holds date on which statement is locked. | [optional] 
**Note** | Pointer to **string** | Holds Note for the statement. | [optional] 
**StatementDate** | Pointer to **string** | Holds date on which statement is created. | [optional] 
**StatementId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**TotalAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 

## Methods

### NewChannelBillingStatementSummaryType

`func NewChannelBillingStatementSummaryType() *ChannelBillingStatementSummaryType`

NewChannelBillingStatementSummaryType instantiates a new ChannelBillingStatementSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelBillingStatementSummaryTypeWithDefaults

`func NewChannelBillingStatementSummaryTypeWithDefaults() *ChannelBillingStatementSummaryType`

NewChannelBillingStatementSummaryTypeWithDefaults instantiates a new ChannelBillingStatementSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountCodeList

`func (o *ChannelBillingStatementSummaryType) GetAccountCodeList() []string`

GetAccountCodeList returns the AccountCodeList field if non-nil, zero value otherwise.

### GetAccountCodeListOk

`func (o *ChannelBillingStatementSummaryType) GetAccountCodeListOk() (*[]string, bool)`

GetAccountCodeListOk returns a tuple with the AccountCodeList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountCodeList

`func (o *ChannelBillingStatementSummaryType) SetAccountCodeList(v []string)`

SetAccountCodeList sets AccountCodeList field to given value.

### HasAccountCodeList

`func (o *ChannelBillingStatementSummaryType) HasAccountCodeList() bool`

HasAccountCodeList returns a boolean if a field has been set.

### GetBeginDate

`func (o *ChannelBillingStatementSummaryType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ChannelBillingStatementSummaryType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ChannelBillingStatementSummaryType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ChannelBillingStatementSummaryType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetDirty

`func (o *ChannelBillingStatementSummaryType) GetDirty() bool`

GetDirty returns the Dirty field if non-nil, zero value otherwise.

### GetDirtyOk

`func (o *ChannelBillingStatementSummaryType) GetDirtyOk() (*bool, bool)`

GetDirtyOk returns a tuple with the Dirty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirty

`func (o *ChannelBillingStatementSummaryType) SetDirty(v bool)`

SetDirty sets Dirty field to given value.

### HasDirty

`func (o *ChannelBillingStatementSummaryType) HasDirty() bool`

HasDirty returns a boolean if a field has been set.

### GetEndDate

`func (o *ChannelBillingStatementSummaryType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ChannelBillingStatementSummaryType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ChannelBillingStatementSummaryType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ChannelBillingStatementSummaryType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetGenerated

`func (o *ChannelBillingStatementSummaryType) GetGenerated() bool`

GetGenerated returns the Generated field if non-nil, zero value otherwise.

### GetGeneratedOk

`func (o *ChannelBillingStatementSummaryType) GetGeneratedOk() (*bool, bool)`

GetGeneratedOk returns a tuple with the Generated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGenerated

`func (o *ChannelBillingStatementSummaryType) SetGenerated(v bool)`

SetGenerated sets Generated field to given value.

### HasGenerated

`func (o *ChannelBillingStatementSummaryType) HasGenerated() bool`

HasGenerated returns a boolean if a field has been set.

### GetLockDate

`func (o *ChannelBillingStatementSummaryType) GetLockDate() string`

GetLockDate returns the LockDate field if non-nil, zero value otherwise.

### GetLockDateOk

`func (o *ChannelBillingStatementSummaryType) GetLockDateOk() (*string, bool)`

GetLockDateOk returns a tuple with the LockDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLockDate

`func (o *ChannelBillingStatementSummaryType) SetLockDate(v string)`

SetLockDate sets LockDate field to given value.

### HasLockDate

`func (o *ChannelBillingStatementSummaryType) HasLockDate() bool`

HasLockDate returns a boolean if a field has been set.

### GetNote

`func (o *ChannelBillingStatementSummaryType) GetNote() string`

GetNote returns the Note field if non-nil, zero value otherwise.

### GetNoteOk

`func (o *ChannelBillingStatementSummaryType) GetNoteOk() (*string, bool)`

GetNoteOk returns a tuple with the Note field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNote

`func (o *ChannelBillingStatementSummaryType) SetNote(v string)`

SetNote sets Note field to given value.

### HasNote

`func (o *ChannelBillingStatementSummaryType) HasNote() bool`

HasNote returns a boolean if a field has been set.

### GetStatementDate

`func (o *ChannelBillingStatementSummaryType) GetStatementDate() string`

GetStatementDate returns the StatementDate field if non-nil, zero value otherwise.

### GetStatementDateOk

`func (o *ChannelBillingStatementSummaryType) GetStatementDateOk() (*string, bool)`

GetStatementDateOk returns a tuple with the StatementDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementDate

`func (o *ChannelBillingStatementSummaryType) SetStatementDate(v string)`

SetStatementDate sets StatementDate field to given value.

### HasStatementDate

`func (o *ChannelBillingStatementSummaryType) HasStatementDate() bool`

HasStatementDate returns a boolean if a field has been set.

### GetStatementId

`func (o *ChannelBillingStatementSummaryType) GetStatementId() UniqueIDType`

GetStatementId returns the StatementId field if non-nil, zero value otherwise.

### GetStatementIdOk

`func (o *ChannelBillingStatementSummaryType) GetStatementIdOk() (*UniqueIDType, bool)`

GetStatementIdOk returns a tuple with the StatementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatementId

`func (o *ChannelBillingStatementSummaryType) SetStatementId(v UniqueIDType)`

SetStatementId sets StatementId field to given value.

### HasStatementId

`func (o *ChannelBillingStatementSummaryType) HasStatementId() bool`

HasStatementId returns a boolean if a field has been set.

### GetTotalAmount

`func (o *ChannelBillingStatementSummaryType) GetTotalAmount() CurrencyAmountType`

GetTotalAmount returns the TotalAmount field if non-nil, zero value otherwise.

### GetTotalAmountOk

`func (o *ChannelBillingStatementSummaryType) GetTotalAmountOk() (*CurrencyAmountType, bool)`

GetTotalAmountOk returns a tuple with the TotalAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAmount

`func (o *ChannelBillingStatementSummaryType) SetTotalAmount(v CurrencyAmountType)`

SetTotalAmount sets TotalAmount field to given value.

### HasTotalAmount

`func (o *ChannelBillingStatementSummaryType) HasTotalAmount() bool`

HasTotalAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


