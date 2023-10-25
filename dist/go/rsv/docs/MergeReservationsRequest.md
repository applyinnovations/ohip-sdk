# MergeReservationsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FromReservationID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ToReservationIDList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMergeReservationsRequest

`func NewMergeReservationsRequest() *MergeReservationsRequest`

NewMergeReservationsRequest instantiates a new MergeReservationsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMergeReservationsRequestWithDefaults

`func NewMergeReservationsRequestWithDefaults() *MergeReservationsRequest`

NewMergeReservationsRequestWithDefaults instantiates a new MergeReservationsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFromReservationID

`func (o *MergeReservationsRequest) GetFromReservationID() UniqueIDType`

GetFromReservationID returns the FromReservationID field if non-nil, zero value otherwise.

### GetFromReservationIDOk

`func (o *MergeReservationsRequest) GetFromReservationIDOk() (*UniqueIDType, bool)`

GetFromReservationIDOk returns a tuple with the FromReservationID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromReservationID

`func (o *MergeReservationsRequest) SetFromReservationID(v UniqueIDType)`

SetFromReservationID sets FromReservationID field to given value.

### HasFromReservationID

`func (o *MergeReservationsRequest) HasFromReservationID() bool`

HasFromReservationID returns a boolean if a field has been set.

### GetHotelId

`func (o *MergeReservationsRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MergeReservationsRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MergeReservationsRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MergeReservationsRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *MergeReservationsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MergeReservationsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MergeReservationsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MergeReservationsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetToReservationIDList

`func (o *MergeReservationsRequest) GetToReservationIDList() []UniqueIDType`

GetToReservationIDList returns the ToReservationIDList field if non-nil, zero value otherwise.

### GetToReservationIDListOk

`func (o *MergeReservationsRequest) GetToReservationIDListOk() (*[]UniqueIDType, bool)`

GetToReservationIDListOk returns a tuple with the ToReservationIDList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToReservationIDList

`func (o *MergeReservationsRequest) SetToReservationIDList(v []UniqueIDType)`

SetToReservationIDList sets ToReservationIDList field to given value.

### HasToReservationIDList

`func (o *MergeReservationsRequest) HasToReservationIDList() bool`

HasToReservationIDList returns a boolean if a field has been set.

### GetWarnings

`func (o *MergeReservationsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MergeReservationsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MergeReservationsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MergeReservationsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


