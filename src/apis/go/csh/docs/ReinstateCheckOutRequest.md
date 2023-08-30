# ReinstateCheckOutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**NotifyInterfaces** | Pointer to **bool** | Indicates whether interfaces should be notified. | [optional] 
**OverrideFlag** | Pointer to **bool** | Indicate whether user wants to reinstate even if some other guest already checked in into same room. | [optional] 
**CashierId** | Pointer to **float32** | The Cashier ID of the Cashier who is currently processing the transaction(s). | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReinstateCheckOutRequest

`func NewReinstateCheckOutRequest() *ReinstateCheckOutRequest`

NewReinstateCheckOutRequest instantiates a new ReinstateCheckOutRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReinstateCheckOutRequestWithDefaults

`func NewReinstateCheckOutRequestWithDefaults() *ReinstateCheckOutRequest`

NewReinstateCheckOutRequestWithDefaults instantiates a new ReinstateCheckOutRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReinstateCheckOutRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReinstateCheckOutRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReinstateCheckOutRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReinstateCheckOutRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *ReinstateCheckOutRequest) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ReinstateCheckOutRequest) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ReinstateCheckOutRequest) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ReinstateCheckOutRequest) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetNotifyInterfaces

`func (o *ReinstateCheckOutRequest) GetNotifyInterfaces() bool`

GetNotifyInterfaces returns the NotifyInterfaces field if non-nil, zero value otherwise.

### GetNotifyInterfacesOk

`func (o *ReinstateCheckOutRequest) GetNotifyInterfacesOk() (*bool, bool)`

GetNotifyInterfacesOk returns a tuple with the NotifyInterfaces field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotifyInterfaces

`func (o *ReinstateCheckOutRequest) SetNotifyInterfaces(v bool)`

SetNotifyInterfaces sets NotifyInterfaces field to given value.

### HasNotifyInterfaces

`func (o *ReinstateCheckOutRequest) HasNotifyInterfaces() bool`

HasNotifyInterfaces returns a boolean if a field has been set.

### GetOverrideFlag

`func (o *ReinstateCheckOutRequest) GetOverrideFlag() bool`

GetOverrideFlag returns the OverrideFlag field if non-nil, zero value otherwise.

### GetOverrideFlagOk

`func (o *ReinstateCheckOutRequest) GetOverrideFlagOk() (*bool, bool)`

GetOverrideFlagOk returns a tuple with the OverrideFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideFlag

`func (o *ReinstateCheckOutRequest) SetOverrideFlag(v bool)`

SetOverrideFlag sets OverrideFlag field to given value.

### HasOverrideFlag

`func (o *ReinstateCheckOutRequest) HasOverrideFlag() bool`

HasOverrideFlag returns a boolean if a field has been set.

### GetCashierId

`func (o *ReinstateCheckOutRequest) GetCashierId() float32`

GetCashierId returns the CashierId field if non-nil, zero value otherwise.

### GetCashierIdOk

`func (o *ReinstateCheckOutRequest) GetCashierIdOk() (*float32, bool)`

GetCashierIdOk returns a tuple with the CashierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCashierId

`func (o *ReinstateCheckOutRequest) SetCashierId(v float32)`

SetCashierId sets CashierId field to given value.

### HasCashierId

`func (o *ReinstateCheckOutRequest) HasCashierId() bool`

HasCashierId returns a boolean if a field has been set.

### GetLinks

`func (o *ReinstateCheckOutRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReinstateCheckOutRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReinstateCheckOutRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReinstateCheckOutRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ReinstateCheckOutRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReinstateCheckOutRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReinstateCheckOutRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReinstateCheckOutRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


