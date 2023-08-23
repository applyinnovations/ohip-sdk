# BillingCheckChargesSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CheckNumber** | Pointer to **string** | Indicates the check number. | [optional] 
**RevenueDate** | Pointer to **string** | The date on which the transaction has its revenue effect. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 

## Methods

### NewBillingCheckChargesSummaryType

`func NewBillingCheckChargesSummaryType() *BillingCheckChargesSummaryType`

NewBillingCheckChargesSummaryType instantiates a new BillingCheckChargesSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBillingCheckChargesSummaryTypeWithDefaults

`func NewBillingCheckChargesSummaryTypeWithDefaults() *BillingCheckChargesSummaryType`

NewBillingCheckChargesSummaryTypeWithDefaults instantiates a new BillingCheckChargesSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCheckNumber

`func (o *BillingCheckChargesSummaryType) GetCheckNumber() string`

GetCheckNumber returns the CheckNumber field if non-nil, zero value otherwise.

### GetCheckNumberOk

`func (o *BillingCheckChargesSummaryType) GetCheckNumberOk() (*string, bool)`

GetCheckNumberOk returns a tuple with the CheckNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCheckNumber

`func (o *BillingCheckChargesSummaryType) SetCheckNumber(v string)`

SetCheckNumber sets CheckNumber field to given value.

### HasCheckNumber

`func (o *BillingCheckChargesSummaryType) HasCheckNumber() bool`

HasCheckNumber returns a boolean if a field has been set.

### GetRevenueDate

`func (o *BillingCheckChargesSummaryType) GetRevenueDate() string`

GetRevenueDate returns the RevenueDate field if non-nil, zero value otherwise.

### GetRevenueDateOk

`func (o *BillingCheckChargesSummaryType) GetRevenueDateOk() (*string, bool)`

GetRevenueDateOk returns a tuple with the RevenueDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueDate

`func (o *BillingCheckChargesSummaryType) SetRevenueDate(v string)`

SetRevenueDate sets RevenueDate field to given value.

### HasRevenueDate

`func (o *BillingCheckChargesSummaryType) HasRevenueDate() bool`

HasRevenueDate returns a boolean if a field has been set.

### GetReservationId

`func (o *BillingCheckChargesSummaryType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *BillingCheckChargesSummaryType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *BillingCheckChargesSummaryType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *BillingCheckChargesSummaryType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


