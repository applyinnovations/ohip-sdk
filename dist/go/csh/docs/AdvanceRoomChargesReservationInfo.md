# AdvanceRoomChargesReservationInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReservationInfo** | Pointer to [**AdvanceRoomChargesInfoType**](AdvanceRoomChargesInfoType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAdvanceRoomChargesReservationInfo

`func NewAdvanceRoomChargesReservationInfo() *AdvanceRoomChargesReservationInfo`

NewAdvanceRoomChargesReservationInfo instantiates a new AdvanceRoomChargesReservationInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdvanceRoomChargesReservationInfoWithDefaults

`func NewAdvanceRoomChargesReservationInfoWithDefaults() *AdvanceRoomChargesReservationInfo`

NewAdvanceRoomChargesReservationInfoWithDefaults instantiates a new AdvanceRoomChargesReservationInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReservationInfo

`func (o *AdvanceRoomChargesReservationInfo) GetReservationInfo() AdvanceRoomChargesInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *AdvanceRoomChargesReservationInfo) GetReservationInfoOk() (*AdvanceRoomChargesInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *AdvanceRoomChargesReservationInfo) SetReservationInfo(v AdvanceRoomChargesInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *AdvanceRoomChargesReservationInfo) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetLinks

`func (o *AdvanceRoomChargesReservationInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AdvanceRoomChargesReservationInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AdvanceRoomChargesReservationInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AdvanceRoomChargesReservationInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AdvanceRoomChargesReservationInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AdvanceRoomChargesReservationInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AdvanceRoomChargesReservationInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AdvanceRoomChargesReservationInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


