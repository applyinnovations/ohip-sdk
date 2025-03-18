# ChannelCarriersCarriers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Carrier** | Pointer to [**[]SystemCarrierType**](SystemCarrierType.md) | Channel carrier details. | [optional] 
**BookingChannelCode** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 

## Methods

### NewChannelCarriersCarriers

`func NewChannelCarriersCarriers() *ChannelCarriersCarriers`

NewChannelCarriersCarriers instantiates a new ChannelCarriersCarriers object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelCarriersCarriersWithDefaults

`func NewChannelCarriersCarriersWithDefaults() *ChannelCarriersCarriers`

NewChannelCarriersCarriersWithDefaults instantiates a new ChannelCarriersCarriers object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCarrier

`func (o *ChannelCarriersCarriers) GetCarrier() []SystemCarrierType`

GetCarrier returns the Carrier field if non-nil, zero value otherwise.

### GetCarrierOk

`func (o *ChannelCarriersCarriers) GetCarrierOk() (*[]SystemCarrierType, bool)`

GetCarrierOk returns a tuple with the Carrier field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCarrier

`func (o *ChannelCarriersCarriers) SetCarrier(v []SystemCarrierType)`

SetCarrier sets Carrier field to given value.

### HasCarrier

`func (o *ChannelCarriersCarriers) HasCarrier() bool`

HasCarrier returns a boolean if a field has been set.

### GetBookingChannelCode

`func (o *ChannelCarriersCarriers) GetBookingChannelCode() string`

GetBookingChannelCode returns the BookingChannelCode field if non-nil, zero value otherwise.

### GetBookingChannelCodeOk

`func (o *ChannelCarriersCarriers) GetBookingChannelCodeOk() (*string, bool)`

GetBookingChannelCodeOk returns a tuple with the BookingChannelCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelCode

`func (o *ChannelCarriersCarriers) SetBookingChannelCode(v string)`

SetBookingChannelCode sets BookingChannelCode field to given value.

### HasBookingChannelCode

`func (o *ChannelCarriersCarriers) HasBookingChannelCode() bool`

HasBookingChannelCode returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


