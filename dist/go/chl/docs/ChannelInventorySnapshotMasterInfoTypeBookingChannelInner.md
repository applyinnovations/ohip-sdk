# ChannelInventorySnapshotMasterInfoTypeBookingChannelInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChannelRoomTypes** | Pointer to [**[]ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner**](ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner.md) | Details about a specific channel room type. | [optional] 
**Code** | Pointer to **string** | The booking channel&#39;s identifying code. | [optional] 
**Description** | Pointer to **string** | The name or description of the booking channel. | [optional] 
**BookingChannelType** | Pointer to **string** | The type of channel. I.E. GDS, ADS, ODS, WEB. | [optional] 
**ChannelInventoryActive** | Pointer to **bool** | Flag to indicate if the channel and hotel combination have the Channel Inventory parameter active. This parameter allows sell limits to be set for the channel or channel room type. | [optional] 

## Methods

### NewChannelInventorySnapshotMasterInfoTypeBookingChannelInner

`func NewChannelInventorySnapshotMasterInfoTypeBookingChannelInner() *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner`

NewChannelInventorySnapshotMasterInfoTypeBookingChannelInner instantiates a new ChannelInventorySnapshotMasterInfoTypeBookingChannelInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChannelInventorySnapshotMasterInfoTypeBookingChannelInnerWithDefaults

`func NewChannelInventorySnapshotMasterInfoTypeBookingChannelInnerWithDefaults() *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner`

NewChannelInventorySnapshotMasterInfoTypeBookingChannelInnerWithDefaults instantiates a new ChannelInventorySnapshotMasterInfoTypeBookingChannelInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChannelRoomTypes

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelRoomTypes() []ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner`

GetChannelRoomTypes returns the ChannelRoomTypes field if non-nil, zero value otherwise.

### GetChannelRoomTypesOk

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelRoomTypesOk() (*[]ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner, bool)`

GetChannelRoomTypesOk returns a tuple with the ChannelRoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelRoomTypes

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetChannelRoomTypes(v []ChannelInventorySnapshotMasterInfoTypeBookingChannelInnerChannelRoomTypesInner)`

SetChannelRoomTypes sets ChannelRoomTypes field to given value.

### HasChannelRoomTypes

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasChannelRoomTypes() bool`

HasChannelRoomTypes returns a boolean if a field has been set.

### GetCode

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetBookingChannelType

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetBookingChannelType() string`

GetBookingChannelType returns the BookingChannelType field if non-nil, zero value otherwise.

### GetBookingChannelTypeOk

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetBookingChannelTypeOk() (*string, bool)`

GetBookingChannelTypeOk returns a tuple with the BookingChannelType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBookingChannelType

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetBookingChannelType(v string)`

SetBookingChannelType sets BookingChannelType field to given value.

### HasBookingChannelType

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasBookingChannelType() bool`

HasBookingChannelType returns a boolean if a field has been set.

### GetChannelInventoryActive

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelInventoryActive() bool`

GetChannelInventoryActive returns the ChannelInventoryActive field if non-nil, zero value otherwise.

### GetChannelInventoryActiveOk

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) GetChannelInventoryActiveOk() (*bool, bool)`

GetChannelInventoryActiveOk returns a tuple with the ChannelInventoryActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChannelInventoryActive

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) SetChannelInventoryActive(v bool)`

SetChannelInventoryActive sets ChannelInventoryActive field to given value.

### HasChannelInventoryActive

`func (o *ChannelInventorySnapshotMasterInfoTypeBookingChannelInner) HasChannelInventoryActive() bool`

HasChannelInventoryActive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


