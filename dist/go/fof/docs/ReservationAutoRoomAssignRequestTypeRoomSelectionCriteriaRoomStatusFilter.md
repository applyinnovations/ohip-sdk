# ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelFORoomStatusList** | Pointer to [**[]FrontOfficeRoomStatusType**](FrontOfficeRoomStatusType.md) | Front office room status instructions to be used in requests for fetching housekeeping rooms. | [optional] 
**HotelRoomStatusList** | Pointer to [**[]HousekeepingRoomStatusType**](HousekeepingRoomStatusType.md) | Hotel room status instructions to be used in requests for fetching rooms. | [optional] 

## Methods

### NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter

`func NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter() *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter`

NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter instantiates a new ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterWithDefaults

`func NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterWithDefaults() *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter`

NewReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterWithDefaults instantiates a new ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelFORoomStatusList

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) GetHotelFORoomStatusList() []FrontOfficeRoomStatusType`

GetHotelFORoomStatusList returns the HotelFORoomStatusList field if non-nil, zero value otherwise.

### GetHotelFORoomStatusListOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) GetHotelFORoomStatusListOk() (*[]FrontOfficeRoomStatusType, bool)`

GetHotelFORoomStatusListOk returns a tuple with the HotelFORoomStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelFORoomStatusList

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) SetHotelFORoomStatusList(v []FrontOfficeRoomStatusType)`

SetHotelFORoomStatusList sets HotelFORoomStatusList field to given value.

### HasHotelFORoomStatusList

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) HasHotelFORoomStatusList() bool`

HasHotelFORoomStatusList returns a boolean if a field has been set.

### GetHotelRoomStatusList

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) GetHotelRoomStatusList() []HousekeepingRoomStatusType`

GetHotelRoomStatusList returns the HotelRoomStatusList field if non-nil, zero value otherwise.

### GetHotelRoomStatusListOk

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) GetHotelRoomStatusListOk() (*[]HousekeepingRoomStatusType, bool)`

GetHotelRoomStatusListOk returns a tuple with the HotelRoomStatusList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRoomStatusList

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) SetHotelRoomStatusList(v []HousekeepingRoomStatusType)`

SetHotelRoomStatusList sets HotelRoomStatusList field to given value.

### HasHotelRoomStatusList

`func (o *ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter) HasHotelRoomStatusList() bool`

HasHotelRoomStatusList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


