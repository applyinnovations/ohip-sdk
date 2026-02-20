# MembershipStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatisticsSummary** | Pointer to [**MembershipStatisticsSummaryType**](MembershipStatisticsSummaryType.md) |  | [optional] 
**Transactions** | Pointer to [**[]MembershipTransactionSummaryType**](MembershipTransactionSummaryType.md) | Activity or a transaction related to the Membership. | [optional] 
**Type** | Pointer to **string** | The type of membership. | [optional] 
**CardNumber** | Pointer to **string** | The membership card number. | [optional] 
**Level** | Pointer to **string** | The level of the membership. | [optional] 

## Methods

### NewMembershipStatisticsType

`func NewMembershipStatisticsType() *MembershipStatisticsType`

NewMembershipStatisticsType instantiates a new MembershipStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipStatisticsTypeWithDefaults

`func NewMembershipStatisticsTypeWithDefaults() *MembershipStatisticsType`

NewMembershipStatisticsTypeWithDefaults instantiates a new MembershipStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatisticsSummary

`func (o *MembershipStatisticsType) GetStatisticsSummary() MembershipStatisticsSummaryType`

GetStatisticsSummary returns the StatisticsSummary field if non-nil, zero value otherwise.

### GetStatisticsSummaryOk

`func (o *MembershipStatisticsType) GetStatisticsSummaryOk() (*MembershipStatisticsSummaryType, bool)`

GetStatisticsSummaryOk returns a tuple with the StatisticsSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticsSummary

`func (o *MembershipStatisticsType) SetStatisticsSummary(v MembershipStatisticsSummaryType)`

SetStatisticsSummary sets StatisticsSummary field to given value.

### HasStatisticsSummary

`func (o *MembershipStatisticsType) HasStatisticsSummary() bool`

HasStatisticsSummary returns a boolean if a field has been set.

### GetTransactions

`func (o *MembershipStatisticsType) GetTransactions() []MembershipTransactionSummaryType`

GetTransactions returns the Transactions field if non-nil, zero value otherwise.

### GetTransactionsOk

`func (o *MembershipStatisticsType) GetTransactionsOk() (*[]MembershipTransactionSummaryType, bool)`

GetTransactionsOk returns a tuple with the Transactions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactions

`func (o *MembershipStatisticsType) SetTransactions(v []MembershipTransactionSummaryType)`

SetTransactions sets Transactions field to given value.

### HasTransactions

`func (o *MembershipStatisticsType) HasTransactions() bool`

HasTransactions returns a boolean if a field has been set.

### GetType

`func (o *MembershipStatisticsType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *MembershipStatisticsType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *MembershipStatisticsType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *MembershipStatisticsType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetCardNumber

`func (o *MembershipStatisticsType) GetCardNumber() string`

GetCardNumber returns the CardNumber field if non-nil, zero value otherwise.

### GetCardNumberOk

`func (o *MembershipStatisticsType) GetCardNumberOk() (*string, bool)`

GetCardNumberOk returns a tuple with the CardNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCardNumber

`func (o *MembershipStatisticsType) SetCardNumber(v string)`

SetCardNumber sets CardNumber field to given value.

### HasCardNumber

`func (o *MembershipStatisticsType) HasCardNumber() bool`

HasCardNumber returns a boolean if a field has been set.

### GetLevel

`func (o *MembershipStatisticsType) GetLevel() string`

GetLevel returns the Level field if non-nil, zero value otherwise.

### GetLevelOk

`func (o *MembershipStatisticsType) GetLevelOk() (*string, bool)`

GetLevelOk returns a tuple with the Level field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLevel

`func (o *MembershipStatisticsType) SetLevel(v string)`

SetLevel sets Level field to given value.

### HasLevel

`func (o *MembershipStatisticsType) HasLevel() bool`

HasLevel returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


