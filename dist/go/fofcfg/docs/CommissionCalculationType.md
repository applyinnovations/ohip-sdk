# CommissionCalculationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RevenueBasedCommission** | Pointer to [**[]CommissionCodeTransactionType**](CommissionCodeTransactionType.md) | Revenue based commission details. | [optional] 
**ReservationBasedCommission** | Pointer to [**ReservationBasedCommissionType**](ReservationBasedCommissionType.md) |  | [optional] 

## Methods

### NewCommissionCalculationType

`func NewCommissionCalculationType() *CommissionCalculationType`

NewCommissionCalculationType instantiates a new CommissionCalculationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionCalculationTypeWithDefaults

`func NewCommissionCalculationTypeWithDefaults() *CommissionCalculationType`

NewCommissionCalculationTypeWithDefaults instantiates a new CommissionCalculationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRevenueBasedCommission

`func (o *CommissionCalculationType) GetRevenueBasedCommission() []CommissionCodeTransactionType`

GetRevenueBasedCommission returns the RevenueBasedCommission field if non-nil, zero value otherwise.

### GetRevenueBasedCommissionOk

`func (o *CommissionCalculationType) GetRevenueBasedCommissionOk() (*[]CommissionCodeTransactionType, bool)`

GetRevenueBasedCommissionOk returns a tuple with the RevenueBasedCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueBasedCommission

`func (o *CommissionCalculationType) SetRevenueBasedCommission(v []CommissionCodeTransactionType)`

SetRevenueBasedCommission sets RevenueBasedCommission field to given value.

### HasRevenueBasedCommission

`func (o *CommissionCalculationType) HasRevenueBasedCommission() bool`

HasRevenueBasedCommission returns a boolean if a field has been set.

### GetReservationBasedCommission

`func (o *CommissionCalculationType) GetReservationBasedCommission() ReservationBasedCommissionType`

GetReservationBasedCommission returns the ReservationBasedCommission field if non-nil, zero value otherwise.

### GetReservationBasedCommissionOk

`func (o *CommissionCalculationType) GetReservationBasedCommissionOk() (*ReservationBasedCommissionType, bool)`

GetReservationBasedCommissionOk returns a tuple with the ReservationBasedCommission field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationBasedCommission

`func (o *CommissionCalculationType) SetReservationBasedCommission(v ReservationBasedCommissionType)`

SetReservationBasedCommission sets ReservationBasedCommission field to given value.

### HasReservationBasedCommission

`func (o *CommissionCalculationType) HasReservationBasedCommission() bool`

HasReservationBasedCommission returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


