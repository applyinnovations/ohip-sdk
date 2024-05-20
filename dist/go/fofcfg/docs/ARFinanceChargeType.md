# ARFinanceChargeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysOlderThan** | Pointer to **int32** | Number of days after which an outstanding balance triggers | [optional] 
**FinanceCharge** | Pointer to **string** | Determines how the finance charge will be applied to outstanding balance valid values are F, P | [optional] 
**FinanceChargeValue** | Pointer to **float32** | Amount or percentage value | [optional] 
**IncludeUnallocatedPayments** | Pointer to **bool** | If true unallocated payments are subtracted from the outstanding balances before finance charge is calculated | [optional] 
**PostOnDay** | Pointer to **int32** | Day of the month when the end of day procedure should run | [optional] 

## Methods

### NewARFinanceChargeType

`func NewARFinanceChargeType() *ARFinanceChargeType`

NewARFinanceChargeType instantiates a new ARFinanceChargeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARFinanceChargeTypeWithDefaults

`func NewARFinanceChargeTypeWithDefaults() *ARFinanceChargeType`

NewARFinanceChargeTypeWithDefaults instantiates a new ARFinanceChargeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDaysOlderThan

`func (o *ARFinanceChargeType) GetDaysOlderThan() int32`

GetDaysOlderThan returns the DaysOlderThan field if non-nil, zero value otherwise.

### GetDaysOlderThanOk

`func (o *ARFinanceChargeType) GetDaysOlderThanOk() (*int32, bool)`

GetDaysOlderThanOk returns a tuple with the DaysOlderThan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysOlderThan

`func (o *ARFinanceChargeType) SetDaysOlderThan(v int32)`

SetDaysOlderThan sets DaysOlderThan field to given value.

### HasDaysOlderThan

`func (o *ARFinanceChargeType) HasDaysOlderThan() bool`

HasDaysOlderThan returns a boolean if a field has been set.

### GetFinanceCharge

`func (o *ARFinanceChargeType) GetFinanceCharge() string`

GetFinanceCharge returns the FinanceCharge field if non-nil, zero value otherwise.

### GetFinanceChargeOk

`func (o *ARFinanceChargeType) GetFinanceChargeOk() (*string, bool)`

GetFinanceChargeOk returns a tuple with the FinanceCharge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinanceCharge

`func (o *ARFinanceChargeType) SetFinanceCharge(v string)`

SetFinanceCharge sets FinanceCharge field to given value.

### HasFinanceCharge

`func (o *ARFinanceChargeType) HasFinanceCharge() bool`

HasFinanceCharge returns a boolean if a field has been set.

### GetFinanceChargeValue

`func (o *ARFinanceChargeType) GetFinanceChargeValue() float32`

GetFinanceChargeValue returns the FinanceChargeValue field if non-nil, zero value otherwise.

### GetFinanceChargeValueOk

`func (o *ARFinanceChargeType) GetFinanceChargeValueOk() (*float32, bool)`

GetFinanceChargeValueOk returns a tuple with the FinanceChargeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFinanceChargeValue

`func (o *ARFinanceChargeType) SetFinanceChargeValue(v float32)`

SetFinanceChargeValue sets FinanceChargeValue field to given value.

### HasFinanceChargeValue

`func (o *ARFinanceChargeType) HasFinanceChargeValue() bool`

HasFinanceChargeValue returns a boolean if a field has been set.

### GetIncludeUnallocatedPayments

`func (o *ARFinanceChargeType) GetIncludeUnallocatedPayments() bool`

GetIncludeUnallocatedPayments returns the IncludeUnallocatedPayments field if non-nil, zero value otherwise.

### GetIncludeUnallocatedPaymentsOk

`func (o *ARFinanceChargeType) GetIncludeUnallocatedPaymentsOk() (*bool, bool)`

GetIncludeUnallocatedPaymentsOk returns a tuple with the IncludeUnallocatedPayments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludeUnallocatedPayments

`func (o *ARFinanceChargeType) SetIncludeUnallocatedPayments(v bool)`

SetIncludeUnallocatedPayments sets IncludeUnallocatedPayments field to given value.

### HasIncludeUnallocatedPayments

`func (o *ARFinanceChargeType) HasIncludeUnallocatedPayments() bool`

HasIncludeUnallocatedPayments returns a boolean if a field has been set.

### GetPostOnDay

`func (o *ARFinanceChargeType) GetPostOnDay() int32`

GetPostOnDay returns the PostOnDay field if non-nil, zero value otherwise.

### GetPostOnDayOk

`func (o *ARFinanceChargeType) GetPostOnDayOk() (*int32, bool)`

GetPostOnDayOk returns a tuple with the PostOnDay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostOnDay

`func (o *ARFinanceChargeType) SetPostOnDay(v int32)`

SetPostOnDay sets PostOnDay field to given value.

### HasPostOnDay

`func (o *ARFinanceChargeType) HasPostOnDay() bool`

HasPostOnDay returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


