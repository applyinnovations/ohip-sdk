# ProcessBatchCCAuthRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Reservations** | Pointer to [**ReservationsForCCAuthType**](ReservationsForCCAuthType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewProcessBatchCCAuthRequest

`func NewProcessBatchCCAuthRequest() *ProcessBatchCCAuthRequest`

NewProcessBatchCCAuthRequest instantiates a new ProcessBatchCCAuthRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProcessBatchCCAuthRequestWithDefaults

`func NewProcessBatchCCAuthRequestWithDefaults() *ProcessBatchCCAuthRequest`

NewProcessBatchCCAuthRequestWithDefaults instantiates a new ProcessBatchCCAuthRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ProcessBatchCCAuthRequest) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProcessBatchCCAuthRequest) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProcessBatchCCAuthRequest) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProcessBatchCCAuthRequest) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *ProcessBatchCCAuthRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ProcessBatchCCAuthRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ProcessBatchCCAuthRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ProcessBatchCCAuthRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetReservations

`func (o *ProcessBatchCCAuthRequest) GetReservations() ReservationsForCCAuthType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *ProcessBatchCCAuthRequest) GetReservationsOk() (*ReservationsForCCAuthType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *ProcessBatchCCAuthRequest) SetReservations(v ReservationsForCCAuthType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *ProcessBatchCCAuthRequest) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetWarnings

`func (o *ProcessBatchCCAuthRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ProcessBatchCCAuthRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ProcessBatchCCAuthRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ProcessBatchCCAuthRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


