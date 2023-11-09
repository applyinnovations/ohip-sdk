# CommissionNotesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionNotesList** | Pointer to [**CommissionNotesListType**](CommissionNotesListType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCommissionNotesDetails

`func NewCommissionNotesDetails() *CommissionNotesDetails`

NewCommissionNotesDetails instantiates a new CommissionNotesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionNotesDetailsWithDefaults

`func NewCommissionNotesDetailsWithDefaults() *CommissionNotesDetails`

NewCommissionNotesDetailsWithDefaults instantiates a new CommissionNotesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionNotesList

`func (o *CommissionNotesDetails) GetCommissionNotesList() CommissionNotesListType`

GetCommissionNotesList returns the CommissionNotesList field if non-nil, zero value otherwise.

### GetCommissionNotesListOk

`func (o *CommissionNotesDetails) GetCommissionNotesListOk() (*CommissionNotesListType, bool)`

GetCommissionNotesListOk returns a tuple with the CommissionNotesList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionNotesList

`func (o *CommissionNotesDetails) SetCommissionNotesList(v CommissionNotesListType)`

SetCommissionNotesList sets CommissionNotesList field to given value.

### HasCommissionNotesList

`func (o *CommissionNotesDetails) HasCommissionNotesList() bool`

HasCommissionNotesList returns a boolean if a field has been set.

### GetHotelId

`func (o *CommissionNotesDetails) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommissionNotesDetails) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommissionNotesDetails) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommissionNotesDetails) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *CommissionNotesDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CommissionNotesDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CommissionNotesDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CommissionNotesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservationId

`func (o *CommissionNotesDetails) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CommissionNotesDetails) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CommissionNotesDetails) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CommissionNotesDetails) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetWarnings

`func (o *CommissionNotesDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CommissionNotesDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CommissionNotesDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CommissionNotesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


