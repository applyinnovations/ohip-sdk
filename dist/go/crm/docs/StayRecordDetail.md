# StayRecordDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StayDetail** | Pointer to [**StayDetailType**](StayDetailType.md) |  | [optional] 
**Revenue** | Pointer to [**[]MembershipTransactionRevenueType**](MembershipTransactionRevenueType.md) | Revenue Details for the stay record. | [optional] 
**Rate** | Pointer to [**[]MembershipTransactionRateType**](MembershipTransactionRateType.md) | Rate Details for the stay record. | [optional] 
**UserDefinedFields** | Pointer to [**UserDefinedFieldsType**](UserDefinedFieldsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStayRecordDetail

`func NewStayRecordDetail() *StayRecordDetail`

NewStayRecordDetail instantiates a new StayRecordDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStayRecordDetailWithDefaults

`func NewStayRecordDetailWithDefaults() *StayRecordDetail`

NewStayRecordDetailWithDefaults instantiates a new StayRecordDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStayDetail

`func (o *StayRecordDetail) GetStayDetail() StayDetailType`

GetStayDetail returns the StayDetail field if non-nil, zero value otherwise.

### GetStayDetailOk

`func (o *StayRecordDetail) GetStayDetailOk() (*StayDetailType, bool)`

GetStayDetailOk returns a tuple with the StayDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDetail

`func (o *StayRecordDetail) SetStayDetail(v StayDetailType)`

SetStayDetail sets StayDetail field to given value.

### HasStayDetail

`func (o *StayRecordDetail) HasStayDetail() bool`

HasStayDetail returns a boolean if a field has been set.

### GetRevenue

`func (o *StayRecordDetail) GetRevenue() []MembershipTransactionRevenueType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *StayRecordDetail) GetRevenueOk() (*[]MembershipTransactionRevenueType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *StayRecordDetail) SetRevenue(v []MembershipTransactionRevenueType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *StayRecordDetail) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetRate

`func (o *StayRecordDetail) GetRate() []MembershipTransactionRateType`

GetRate returns the Rate field if non-nil, zero value otherwise.

### GetRateOk

`func (o *StayRecordDetail) GetRateOk() (*[]MembershipTransactionRateType, bool)`

GetRateOk returns a tuple with the Rate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRate

`func (o *StayRecordDetail) SetRate(v []MembershipTransactionRateType)`

SetRate sets Rate field to given value.

### HasRate

`func (o *StayRecordDetail) HasRate() bool`

HasRate returns a boolean if a field has been set.

### GetUserDefinedFields

`func (o *StayRecordDetail) GetUserDefinedFields() UserDefinedFieldsType`

GetUserDefinedFields returns the UserDefinedFields field if non-nil, zero value otherwise.

### GetUserDefinedFieldsOk

`func (o *StayRecordDetail) GetUserDefinedFieldsOk() (*UserDefinedFieldsType, bool)`

GetUserDefinedFieldsOk returns a tuple with the UserDefinedFields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserDefinedFields

`func (o *StayRecordDetail) SetUserDefinedFields(v UserDefinedFieldsType)`

SetUserDefinedFields sets UserDefinedFields field to given value.

### HasUserDefinedFields

`func (o *StayRecordDetail) HasUserDefinedFields() bool`

HasUserDefinedFields returns a boolean if a field has been set.

### GetWarnings

`func (o *StayRecordDetail) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StayRecordDetail) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StayRecordDetail) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StayRecordDetail) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


