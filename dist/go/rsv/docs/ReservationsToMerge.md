# ReservationsToMerge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FromReservationID** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**ToReservationIDList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewReservationsToMerge

`func NewReservationsToMerge() *ReservationsToMerge`

NewReservationsToMerge instantiates a new ReservationsToMerge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationsToMergeWithDefaults

`func NewReservationsToMergeWithDefaults() *ReservationsToMerge`

NewReservationsToMergeWithDefaults instantiates a new ReservationsToMerge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFromReservationID

`func (o *ReservationsToMerge) GetFromReservationID() UniqueIDType`

GetFromReservationID returns the FromReservationID field if non-nil, zero value otherwise.

### GetFromReservationIDOk

`func (o *ReservationsToMerge) GetFromReservationIDOk() (*UniqueIDType, bool)`

GetFromReservationIDOk returns a tuple with the FromReservationID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromReservationID

`func (o *ReservationsToMerge) SetFromReservationID(v UniqueIDType)`

SetFromReservationID sets FromReservationID field to given value.

### HasFromReservationID

`func (o *ReservationsToMerge) HasFromReservationID() bool`

HasFromReservationID returns a boolean if a field has been set.

### GetHotelId

`func (o *ReservationsToMerge) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationsToMerge) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationsToMerge) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationsToMerge) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ReservationsToMerge) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ReservationsToMerge) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ReservationsToMerge) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ReservationsToMerge) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetToReservationIDList

`func (o *ReservationsToMerge) GetToReservationIDList() []UniqueIDType`

GetToReservationIDList returns the ToReservationIDList field if non-nil, zero value otherwise.

### GetToReservationIDListOk

`func (o *ReservationsToMerge) GetToReservationIDListOk() (*[]UniqueIDType, bool)`

GetToReservationIDListOk returns a tuple with the ToReservationIDList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToReservationIDList

`func (o *ReservationsToMerge) SetToReservationIDList(v []UniqueIDType)`

SetToReservationIDList sets ToReservationIDList field to given value.

### HasToReservationIDList

`func (o *ReservationsToMerge) HasToReservationIDList() bool`

HasToReservationIDList returns a boolean if a field has been set.

### GetWarnings

`func (o *ReservationsToMerge) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ReservationsToMerge) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ReservationsToMerge) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ReservationsToMerge) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


