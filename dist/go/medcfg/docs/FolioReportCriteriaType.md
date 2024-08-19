# FolioReportCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BillNumber** | Pointer to **int32** | Optional bill number to generate. | [optional] 
**FolioDate** | Pointer to **string** | Optional folio generation date - defaults to hotel business date. | [optional] 
**FolioType** | Pointer to **string** | Optional folio type. | [optional] 
**FolioWindowNo** | Pointer to **int32** | Folio window number to generate (defaults to view 1). | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the folio. | [optional] 
**ReferenceCurrency** | Pointer to **string** | Folio currency code. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewFolioReportCriteriaType

`func NewFolioReportCriteriaType() *FolioReportCriteriaType`

NewFolioReportCriteriaType instantiates a new FolioReportCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFolioReportCriteriaTypeWithDefaults

`func NewFolioReportCriteriaTypeWithDefaults() *FolioReportCriteriaType`

NewFolioReportCriteriaTypeWithDefaults instantiates a new FolioReportCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBillNumber

`func (o *FolioReportCriteriaType) GetBillNumber() int32`

GetBillNumber returns the BillNumber field if non-nil, zero value otherwise.

### GetBillNumberOk

`func (o *FolioReportCriteriaType) GetBillNumberOk() (*int32, bool)`

GetBillNumberOk returns a tuple with the BillNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillNumber

`func (o *FolioReportCriteriaType) SetBillNumber(v int32)`

SetBillNumber sets BillNumber field to given value.

### HasBillNumber

`func (o *FolioReportCriteriaType) HasBillNumber() bool`

HasBillNumber returns a boolean if a field has been set.

### GetFolioDate

`func (o *FolioReportCriteriaType) GetFolioDate() string`

GetFolioDate returns the FolioDate field if non-nil, zero value otherwise.

### GetFolioDateOk

`func (o *FolioReportCriteriaType) GetFolioDateOk() (*string, bool)`

GetFolioDateOk returns a tuple with the FolioDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioDate

`func (o *FolioReportCriteriaType) SetFolioDate(v string)`

SetFolioDate sets FolioDate field to given value.

### HasFolioDate

`func (o *FolioReportCriteriaType) HasFolioDate() bool`

HasFolioDate returns a boolean if a field has been set.

### GetFolioType

`func (o *FolioReportCriteriaType) GetFolioType() string`

GetFolioType returns the FolioType field if non-nil, zero value otherwise.

### GetFolioTypeOk

`func (o *FolioReportCriteriaType) GetFolioTypeOk() (*string, bool)`

GetFolioTypeOk returns a tuple with the FolioType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioType

`func (o *FolioReportCriteriaType) SetFolioType(v string)`

SetFolioType sets FolioType field to given value.

### HasFolioType

`func (o *FolioReportCriteriaType) HasFolioType() bool`

HasFolioType returns a boolean if a field has been set.

### GetFolioWindowNo

`func (o *FolioReportCriteriaType) GetFolioWindowNo() int32`

GetFolioWindowNo returns the FolioWindowNo field if non-nil, zero value otherwise.

### GetFolioWindowNoOk

`func (o *FolioReportCriteriaType) GetFolioWindowNoOk() (*int32, bool)`

GetFolioWindowNoOk returns a tuple with the FolioWindowNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFolioWindowNo

`func (o *FolioReportCriteriaType) SetFolioWindowNo(v int32)`

SetFolioWindowNo sets FolioWindowNo field to given value.

### HasFolioWindowNo

`func (o *FolioReportCriteriaType) HasFolioWindowNo() bool`

HasFolioWindowNo returns a boolean if a field has been set.

### GetHotelId

`func (o *FolioReportCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FolioReportCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FolioReportCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FolioReportCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReferenceCurrency

`func (o *FolioReportCriteriaType) GetReferenceCurrency() string`

GetReferenceCurrency returns the ReferenceCurrency field if non-nil, zero value otherwise.

### GetReferenceCurrencyOk

`func (o *FolioReportCriteriaType) GetReferenceCurrencyOk() (*string, bool)`

GetReferenceCurrencyOk returns a tuple with the ReferenceCurrency field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReferenceCurrency

`func (o *FolioReportCriteriaType) SetReferenceCurrency(v string)`

SetReferenceCurrency sets ReferenceCurrency field to given value.

### HasReferenceCurrency

`func (o *FolioReportCriteriaType) HasReferenceCurrency() bool`

HasReferenceCurrency returns a boolean if a field has been set.

### GetReservationId

`func (o *FolioReportCriteriaType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *FolioReportCriteriaType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *FolioReportCriteriaType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *FolioReportCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


