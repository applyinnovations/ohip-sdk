# FolioReportResultType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Folio** | Pointer to **string** | Folio PDF report. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the folio. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewFolioReportResultType

`func NewFolioReportResultType() *FolioReportResultType`

NewFolioReportResultType instantiates a new FolioReportResultType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioReportResultTypeWithDefaults

`func NewFolioReportResultTypeWithDefaults() *FolioReportResultType`

NewFolioReportResultTypeWithDefaults instantiates a new FolioReportResultType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFolio

`func (o *FolioReportResultType) GetFolio() string`

GetFolio returns the Folio field if non-nil, zero value otherwise.

### GetFolioOk

`func (o *FolioReportResultType) GetFolioOk() (*string, bool)`

GetFolioOk returns a tuple with the Folio field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolio

`func (o *FolioReportResultType) SetFolio(v string)`

SetFolio sets Folio field to given value.

### HasFolio

`func (o *FolioReportResultType) HasFolio() bool`

HasFolio returns a boolean if a field has been set.

### GetHotelId

`func (o *FolioReportResultType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FolioReportResultType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FolioReportResultType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FolioReportResultType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *FolioReportResultType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *FolioReportResultType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *FolioReportResultType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *FolioReportResultType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


