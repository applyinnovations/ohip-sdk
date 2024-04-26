# RoomAllocationInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailableRoomGridInvSummary** | Pointer to [**[]BlockGridInvType**](BlockGridInvType.md) | Indicates the values of room available room grid inventory&#39;s summary. | [optional] 
**ExtendedStay** | Pointer to **bool** | Indicates if the current date will require automatic block extension. | [optional] 
**RoomGridDetails** | Pointer to [**[]RoomGridDetailsType**](RoomGridDetailsType.md) | Indicates the values of room inventory or rate amounts. | [optional] 
**RoomGridInvSummary** | Pointer to [**[]BlockGridInvType**](BlockGridInvType.md) | Indicates the values of room inventory&#39;s summary. | [optional] 
**StayDate** | Pointer to **string** | Indicates the date of the room allocation or rate amount. | [optional] 

## Methods

### NewRoomAllocationInfoType

`func NewRoomAllocationInfoType() *RoomAllocationInfoType`

NewRoomAllocationInfoType instantiates a new RoomAllocationInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomAllocationInfoTypeWithDefaults

`func NewRoomAllocationInfoTypeWithDefaults() *RoomAllocationInfoType`

NewRoomAllocationInfoTypeWithDefaults instantiates a new RoomAllocationInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAvailableRoomGridInvSummary

`func (o *RoomAllocationInfoType) GetAvailableRoomGridInvSummary() []BlockGridInvType`

GetAvailableRoomGridInvSummary returns the AvailableRoomGridInvSummary field if non-nil, zero value otherwise.

### GetAvailableRoomGridInvSummaryOk

`func (o *RoomAllocationInfoType) GetAvailableRoomGridInvSummaryOk() (*[]BlockGridInvType, bool)`

GetAvailableRoomGridInvSummaryOk returns a tuple with the AvailableRoomGridInvSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAvailableRoomGridInvSummary

`func (o *RoomAllocationInfoType) SetAvailableRoomGridInvSummary(v []BlockGridInvType)`

SetAvailableRoomGridInvSummary sets AvailableRoomGridInvSummary field to given value.

### HasAvailableRoomGridInvSummary

`func (o *RoomAllocationInfoType) HasAvailableRoomGridInvSummary() bool`

HasAvailableRoomGridInvSummary returns a boolean if a field has been set.

### GetExtendedStay

`func (o *RoomAllocationInfoType) GetExtendedStay() bool`

GetExtendedStay returns the ExtendedStay field if non-nil, zero value otherwise.

### GetExtendedStayOk

`func (o *RoomAllocationInfoType) GetExtendedStayOk() (*bool, bool)`

GetExtendedStayOk returns a tuple with the ExtendedStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtendedStay

`func (o *RoomAllocationInfoType) SetExtendedStay(v bool)`

SetExtendedStay sets ExtendedStay field to given value.

### HasExtendedStay

`func (o *RoomAllocationInfoType) HasExtendedStay() bool`

HasExtendedStay returns a boolean if a field has been set.

### GetRoomGridDetails

`func (o *RoomAllocationInfoType) GetRoomGridDetails() []RoomGridDetailsType`

GetRoomGridDetails returns the RoomGridDetails field if non-nil, zero value otherwise.

### GetRoomGridDetailsOk

`func (o *RoomAllocationInfoType) GetRoomGridDetailsOk() (*[]RoomGridDetailsType, bool)`

GetRoomGridDetailsOk returns a tuple with the RoomGridDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomGridDetails

`func (o *RoomAllocationInfoType) SetRoomGridDetails(v []RoomGridDetailsType)`

SetRoomGridDetails sets RoomGridDetails field to given value.

### HasRoomGridDetails

`func (o *RoomAllocationInfoType) HasRoomGridDetails() bool`

HasRoomGridDetails returns a boolean if a field has been set.

### GetRoomGridInvSummary

`func (o *RoomAllocationInfoType) GetRoomGridInvSummary() []BlockGridInvType`

GetRoomGridInvSummary returns the RoomGridInvSummary field if non-nil, zero value otherwise.

### GetRoomGridInvSummaryOk

`func (o *RoomAllocationInfoType) GetRoomGridInvSummaryOk() (*[]BlockGridInvType, bool)`

GetRoomGridInvSummaryOk returns a tuple with the RoomGridInvSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomGridInvSummary

`func (o *RoomAllocationInfoType) SetRoomGridInvSummary(v []BlockGridInvType)`

SetRoomGridInvSummary sets RoomGridInvSummary field to given value.

### HasRoomGridInvSummary

`func (o *RoomAllocationInfoType) HasRoomGridInvSummary() bool`

HasRoomGridInvSummary returns a boolean if a field has been set.

### GetStayDate

`func (o *RoomAllocationInfoType) GetStayDate() string`

GetStayDate returns the StayDate field if non-nil, zero value otherwise.

### GetStayDateOk

`func (o *RoomAllocationInfoType) GetStayDateOk() (*string, bool)`

GetStayDateOk returns a tuple with the StayDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayDate

`func (o *RoomAllocationInfoType) SetStayDate(v string)`

SetStayDate sets StayDate field to given value.

### HasStayDate

`func (o *RoomAllocationInfoType) HasStayDate() bool`

HasStayDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


