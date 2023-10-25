# MembershipAwardFinancialTransactionInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AwardValue** | Pointer to **float32** | The actual value of the award, in the amount of currency. | [optional] 
**DisplaySet** | Pointer to **string** | Display set for other type of awards for export purpose. | [optional] 
**ExchangeRate** | Pointer to **string** | Exchange rate type to be used. | [optional] 
**IgnoreFinancialTransaction** | Pointer to **bool** | Ignore Financial transactions in OPERA or not? If true, Financial transaction is not required in OPERA while giving award as it may be recorded in some external system and only points accounting is done in OCIS. | [optional] 
**MaxPercentAllowed** | Pointer to **float32** | Max percent of total value to be allowed to convert money to points. | [optional] 
**MessageLine1** | Pointer to **string** | Message for Other awards. | [optional] 
**MessageLine2** | Pointer to **string** | Message for Other awards. | [optional] 
**MessageLine3** | Pointer to **string** | Message for Other awards. | [optional] 
**MessageLine4** | Pointer to **string** | Message for Other awards. | [optional] 
**PointsRequired** | Pointer to **float32** | Points required to avail/redeem this award. | [optional] 

## Methods

### NewMembershipAwardFinancialTransactionInfoType

`func NewMembershipAwardFinancialTransactionInfoType() *MembershipAwardFinancialTransactionInfoType`

NewMembershipAwardFinancialTransactionInfoType instantiates a new MembershipAwardFinancialTransactionInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipAwardFinancialTransactionInfoTypeWithDefaults

`func NewMembershipAwardFinancialTransactionInfoTypeWithDefaults() *MembershipAwardFinancialTransactionInfoType`

NewMembershipAwardFinancialTransactionInfoTypeWithDefaults instantiates a new MembershipAwardFinancialTransactionInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAwardValue

`func (o *MembershipAwardFinancialTransactionInfoType) GetAwardValue() float32`

GetAwardValue returns the AwardValue field if non-nil, zero value otherwise.

### GetAwardValueOk

`func (o *MembershipAwardFinancialTransactionInfoType) GetAwardValueOk() (*float32, bool)`

GetAwardValueOk returns a tuple with the AwardValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAwardValue

`func (o *MembershipAwardFinancialTransactionInfoType) SetAwardValue(v float32)`

SetAwardValue sets AwardValue field to given value.

### HasAwardValue

`func (o *MembershipAwardFinancialTransactionInfoType) HasAwardValue() bool`

HasAwardValue returns a boolean if a field has been set.

### GetDisplaySet

`func (o *MembershipAwardFinancialTransactionInfoType) GetDisplaySet() string`

GetDisplaySet returns the DisplaySet field if non-nil, zero value otherwise.

### GetDisplaySetOk

`func (o *MembershipAwardFinancialTransactionInfoType) GetDisplaySetOk() (*string, bool)`

GetDisplaySetOk returns a tuple with the DisplaySet field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySet

`func (o *MembershipAwardFinancialTransactionInfoType) SetDisplaySet(v string)`

SetDisplaySet sets DisplaySet field to given value.

### HasDisplaySet

`func (o *MembershipAwardFinancialTransactionInfoType) HasDisplaySet() bool`

HasDisplaySet returns a boolean if a field has been set.

### GetExchangeRate

`func (o *MembershipAwardFinancialTransactionInfoType) GetExchangeRate() string`

GetExchangeRate returns the ExchangeRate field if non-nil, zero value otherwise.

### GetExchangeRateOk

`func (o *MembershipAwardFinancialTransactionInfoType) GetExchangeRateOk() (*string, bool)`

GetExchangeRateOk returns a tuple with the ExchangeRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExchangeRate

`func (o *MembershipAwardFinancialTransactionInfoType) SetExchangeRate(v string)`

SetExchangeRate sets ExchangeRate field to given value.

### HasExchangeRate

`func (o *MembershipAwardFinancialTransactionInfoType) HasExchangeRate() bool`

HasExchangeRate returns a boolean if a field has been set.

### GetIgnoreFinancialTransaction

`func (o *MembershipAwardFinancialTransactionInfoType) GetIgnoreFinancialTransaction() bool`

GetIgnoreFinancialTransaction returns the IgnoreFinancialTransaction field if non-nil, zero value otherwise.

### GetIgnoreFinancialTransactionOk

`func (o *MembershipAwardFinancialTransactionInfoType) GetIgnoreFinancialTransactionOk() (*bool, bool)`

GetIgnoreFinancialTransactionOk returns a tuple with the IgnoreFinancialTransaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIgnoreFinancialTransaction

`func (o *MembershipAwardFinancialTransactionInfoType) SetIgnoreFinancialTransaction(v bool)`

SetIgnoreFinancialTransaction sets IgnoreFinancialTransaction field to given value.

### HasIgnoreFinancialTransaction

`func (o *MembershipAwardFinancialTransactionInfoType) HasIgnoreFinancialTransaction() bool`

HasIgnoreFinancialTransaction returns a boolean if a field has been set.

### GetMaxPercentAllowed

`func (o *MembershipAwardFinancialTransactionInfoType) GetMaxPercentAllowed() float32`

GetMaxPercentAllowed returns the MaxPercentAllowed field if non-nil, zero value otherwise.

### GetMaxPercentAllowedOk

`func (o *MembershipAwardFinancialTransactionInfoType) GetMaxPercentAllowedOk() (*float32, bool)`

GetMaxPercentAllowedOk returns a tuple with the MaxPercentAllowed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPercentAllowed

`func (o *MembershipAwardFinancialTransactionInfoType) SetMaxPercentAllowed(v float32)`

SetMaxPercentAllowed sets MaxPercentAllowed field to given value.

### HasMaxPercentAllowed

`func (o *MembershipAwardFinancialTransactionInfoType) HasMaxPercentAllowed() bool`

HasMaxPercentAllowed returns a boolean if a field has been set.

### GetMessageLine1

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine1() string`

GetMessageLine1 returns the MessageLine1 field if non-nil, zero value otherwise.

### GetMessageLine1Ok

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine1Ok() (*string, bool)`

GetMessageLine1Ok returns a tuple with the MessageLine1 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageLine1

`func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine1(v string)`

SetMessageLine1 sets MessageLine1 field to given value.

### HasMessageLine1

`func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine1() bool`

HasMessageLine1 returns a boolean if a field has been set.

### GetMessageLine2

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine2() string`

GetMessageLine2 returns the MessageLine2 field if non-nil, zero value otherwise.

### GetMessageLine2Ok

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine2Ok() (*string, bool)`

GetMessageLine2Ok returns a tuple with the MessageLine2 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageLine2

`func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine2(v string)`

SetMessageLine2 sets MessageLine2 field to given value.

### HasMessageLine2

`func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine2() bool`

HasMessageLine2 returns a boolean if a field has been set.

### GetMessageLine3

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine3() string`

GetMessageLine3 returns the MessageLine3 field if non-nil, zero value otherwise.

### GetMessageLine3Ok

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine3Ok() (*string, bool)`

GetMessageLine3Ok returns a tuple with the MessageLine3 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageLine3

`func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine3(v string)`

SetMessageLine3 sets MessageLine3 field to given value.

### HasMessageLine3

`func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine3() bool`

HasMessageLine3 returns a boolean if a field has been set.

### GetMessageLine4

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine4() string`

GetMessageLine4 returns the MessageLine4 field if non-nil, zero value otherwise.

### GetMessageLine4Ok

`func (o *MembershipAwardFinancialTransactionInfoType) GetMessageLine4Ok() (*string, bool)`

GetMessageLine4Ok returns a tuple with the MessageLine4 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageLine4

`func (o *MembershipAwardFinancialTransactionInfoType) SetMessageLine4(v string)`

SetMessageLine4 sets MessageLine4 field to given value.

### HasMessageLine4

`func (o *MembershipAwardFinancialTransactionInfoType) HasMessageLine4() bool`

HasMessageLine4 returns a boolean if a field has been set.

### GetPointsRequired

`func (o *MembershipAwardFinancialTransactionInfoType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *MembershipAwardFinancialTransactionInfoType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *MembershipAwardFinancialTransactionInfoType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *MembershipAwardFinancialTransactionInfoType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


