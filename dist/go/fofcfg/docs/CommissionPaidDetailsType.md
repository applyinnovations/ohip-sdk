# CommissionPaidDetailsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PerNight** | Pointer to **bool** |  | [optional] 
**PerStay** | Pointer to **bool** |  | [optional] 
**CommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**WeekEndCommissionAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**CommissionType** | Pointer to **string** | Indicates the type of commission paid to agent. | [optional] 

## Methods

### NewCommissionPaidDetailsType

`func NewCommissionPaidDetailsType() *CommissionPaidDetailsType`

NewCommissionPaidDetailsType instantiates a new CommissionPaidDetailsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionPaidDetailsTypeWithDefaults

`func NewCommissionPaidDetailsTypeWithDefaults() *CommissionPaidDetailsType`

NewCommissionPaidDetailsTypeWithDefaults instantiates a new CommissionPaidDetailsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPerNight

`func (o *CommissionPaidDetailsType) GetPerNight() bool`

GetPerNight returns the PerNight field if non-nil, zero value otherwise.

### GetPerNightOk

`func (o *CommissionPaidDetailsType) GetPerNightOk() (*bool, bool)`

GetPerNightOk returns a tuple with the PerNight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerNight

`func (o *CommissionPaidDetailsType) SetPerNight(v bool)`

SetPerNight sets PerNight field to given value.

### HasPerNight

`func (o *CommissionPaidDetailsType) HasPerNight() bool`

HasPerNight returns a boolean if a field has been set.

### GetPerStay

`func (o *CommissionPaidDetailsType) GetPerStay() bool`

GetPerStay returns the PerStay field if non-nil, zero value otherwise.

### GetPerStayOk

`func (o *CommissionPaidDetailsType) GetPerStayOk() (*bool, bool)`

GetPerStayOk returns a tuple with the PerStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPerStay

`func (o *CommissionPaidDetailsType) SetPerStay(v bool)`

SetPerStay sets PerStay field to given value.

### HasPerStay

`func (o *CommissionPaidDetailsType) HasPerStay() bool`

HasPerStay returns a boolean if a field has been set.

### GetCommissionAmount

`func (o *CommissionPaidDetailsType) GetCommissionAmount() CurrencyAmountType`

GetCommissionAmount returns the CommissionAmount field if non-nil, zero value otherwise.

### GetCommissionAmountOk

`func (o *CommissionPaidDetailsType) GetCommissionAmountOk() (*CurrencyAmountType, bool)`

GetCommissionAmountOk returns a tuple with the CommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAmount

`func (o *CommissionPaidDetailsType) SetCommissionAmount(v CurrencyAmountType)`

SetCommissionAmount sets CommissionAmount field to given value.

### HasCommissionAmount

`func (o *CommissionPaidDetailsType) HasCommissionAmount() bool`

HasCommissionAmount returns a boolean if a field has been set.

### GetWeekEndCommissionAmount

`func (o *CommissionPaidDetailsType) GetWeekEndCommissionAmount() CurrencyAmountType`

GetWeekEndCommissionAmount returns the WeekEndCommissionAmount field if non-nil, zero value otherwise.

### GetWeekEndCommissionAmountOk

`func (o *CommissionPaidDetailsType) GetWeekEndCommissionAmountOk() (*CurrencyAmountType, bool)`

GetWeekEndCommissionAmountOk returns a tuple with the WeekEndCommissionAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWeekEndCommissionAmount

`func (o *CommissionPaidDetailsType) SetWeekEndCommissionAmount(v CurrencyAmountType)`

SetWeekEndCommissionAmount sets WeekEndCommissionAmount field to given value.

### HasWeekEndCommissionAmount

`func (o *CommissionPaidDetailsType) HasWeekEndCommissionAmount() bool`

HasWeekEndCommissionAmount returns a boolean if a field has been set.

### GetCommissionType

`func (o *CommissionPaidDetailsType) GetCommissionType() string`

GetCommissionType returns the CommissionType field if non-nil, zero value otherwise.

### GetCommissionTypeOk

`func (o *CommissionPaidDetailsType) GetCommissionTypeOk() (*string, bool)`

GetCommissionTypeOk returns a tuple with the CommissionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionType

`func (o *CommissionPaidDetailsType) SetCommissionType(v string)`

SetCommissionType sets CommissionType field to given value.

### HasCommissionType

`func (o *CommissionPaidDetailsType) HasCommissionType() bool`

HasCommissionType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


