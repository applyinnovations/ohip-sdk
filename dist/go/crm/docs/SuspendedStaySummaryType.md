# SuspendedStaySummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SuspendedStayRecordId** | Pointer to **string** | Suspended Stay Record ID. | [optional] 
**HotelId** | Pointer to **string** | Hotel code of the reservation. | [optional] 
**ReservationStatus** | Pointer to **string** | Reservation status. | [optional] 
**ExternalConfirmationNo** | Pointer to **string** | External Confirmation number of the reservation on PMS side. | [optional] 
**ProfileIdList** | Pointer to [**[]UniqueIDType**](UniqueIDType.md) | Unique Id that references an object uniquely in the system. | [optional] 
**ArrivalDate** | Pointer to **string** | Date of arrival. | [optional] 
**DepartureDate** | Pointer to **string** | Date of departure. | [optional] 
**StayStatus** | Pointer to **string** | Status of the stay. | [optional] 

## Methods

### NewSuspendedStaySummaryType

`func NewSuspendedStaySummaryType() *SuspendedStaySummaryType`

NewSuspendedStaySummaryType instantiates a new SuspendedStaySummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSuspendedStaySummaryTypeWithDefaults

`func NewSuspendedStaySummaryTypeWithDefaults() *SuspendedStaySummaryType`

NewSuspendedStaySummaryTypeWithDefaults instantiates a new SuspendedStaySummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuspendedStayRecordId

`func (o *SuspendedStaySummaryType) GetSuspendedStayRecordId() string`

GetSuspendedStayRecordId returns the SuspendedStayRecordId field if non-nil, zero value otherwise.

### GetSuspendedStayRecordIdOk

`func (o *SuspendedStaySummaryType) GetSuspendedStayRecordIdOk() (*string, bool)`

GetSuspendedStayRecordIdOk returns a tuple with the SuspendedStayRecordId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuspendedStayRecordId

`func (o *SuspendedStaySummaryType) SetSuspendedStayRecordId(v string)`

SetSuspendedStayRecordId sets SuspendedStayRecordId field to given value.

### HasSuspendedStayRecordId

`func (o *SuspendedStaySummaryType) HasSuspendedStayRecordId() bool`

HasSuspendedStayRecordId returns a boolean if a field has been set.

### GetHotelId

`func (o *SuspendedStaySummaryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SuspendedStaySummaryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SuspendedStaySummaryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SuspendedStaySummaryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationStatus

`func (o *SuspendedStaySummaryType) GetReservationStatus() string`

GetReservationStatus returns the ReservationStatus field if non-nil, zero value otherwise.

### GetReservationStatusOk

`func (o *SuspendedStaySummaryType) GetReservationStatusOk() (*string, bool)`

GetReservationStatusOk returns a tuple with the ReservationStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationStatus

`func (o *SuspendedStaySummaryType) SetReservationStatus(v string)`

SetReservationStatus sets ReservationStatus field to given value.

### HasReservationStatus

`func (o *SuspendedStaySummaryType) HasReservationStatus() bool`

HasReservationStatus returns a boolean if a field has been set.

### GetExternalConfirmationNo

`func (o *SuspendedStaySummaryType) GetExternalConfirmationNo() string`

GetExternalConfirmationNo returns the ExternalConfirmationNo field if non-nil, zero value otherwise.

### GetExternalConfirmationNoOk

`func (o *SuspendedStaySummaryType) GetExternalConfirmationNoOk() (*string, bool)`

GetExternalConfirmationNoOk returns a tuple with the ExternalConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalConfirmationNo

`func (o *SuspendedStaySummaryType) SetExternalConfirmationNo(v string)`

SetExternalConfirmationNo sets ExternalConfirmationNo field to given value.

### HasExternalConfirmationNo

`func (o *SuspendedStaySummaryType) HasExternalConfirmationNo() bool`

HasExternalConfirmationNo returns a boolean if a field has been set.

### GetProfileIdList

`func (o *SuspendedStaySummaryType) GetProfileIdList() []UniqueIDType`

GetProfileIdList returns the ProfileIdList field if non-nil, zero value otherwise.

### GetProfileIdListOk

`func (o *SuspendedStaySummaryType) GetProfileIdListOk() (*[]UniqueIDType, bool)`

GetProfileIdListOk returns a tuple with the ProfileIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileIdList

`func (o *SuspendedStaySummaryType) SetProfileIdList(v []UniqueIDType)`

SetProfileIdList sets ProfileIdList field to given value.

### HasProfileIdList

`func (o *SuspendedStaySummaryType) HasProfileIdList() bool`

HasProfileIdList returns a boolean if a field has been set.

### GetArrivalDate

`func (o *SuspendedStaySummaryType) GetArrivalDate() string`

GetArrivalDate returns the ArrivalDate field if non-nil, zero value otherwise.

### GetArrivalDateOk

`func (o *SuspendedStaySummaryType) GetArrivalDateOk() (*string, bool)`

GetArrivalDateOk returns a tuple with the ArrivalDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArrivalDate

`func (o *SuspendedStaySummaryType) SetArrivalDate(v string)`

SetArrivalDate sets ArrivalDate field to given value.

### HasArrivalDate

`func (o *SuspendedStaySummaryType) HasArrivalDate() bool`

HasArrivalDate returns a boolean if a field has been set.

### GetDepartureDate

`func (o *SuspendedStaySummaryType) GetDepartureDate() string`

GetDepartureDate returns the DepartureDate field if non-nil, zero value otherwise.

### GetDepartureDateOk

`func (o *SuspendedStaySummaryType) GetDepartureDateOk() (*string, bool)`

GetDepartureDateOk returns a tuple with the DepartureDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartureDate

`func (o *SuspendedStaySummaryType) SetDepartureDate(v string)`

SetDepartureDate sets DepartureDate field to given value.

### HasDepartureDate

`func (o *SuspendedStaySummaryType) HasDepartureDate() bool`

HasDepartureDate returns a boolean if a field has been set.

### GetStayStatus

`func (o *SuspendedStaySummaryType) GetStayStatus() string`

GetStayStatus returns the StayStatus field if non-nil, zero value otherwise.

### GetStayStatusOk

`func (o *SuspendedStaySummaryType) GetStayStatusOk() (*string, bool)`

GetStayStatusOk returns a tuple with the StayStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStayStatus

`func (o *SuspendedStaySummaryType) SetStayStatus(v string)`

SetStayStatus sets StayStatus field to given value.

### HasStayStatus

`func (o *SuspendedStaySummaryType) HasStayStatus() bool`

HasStayStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


