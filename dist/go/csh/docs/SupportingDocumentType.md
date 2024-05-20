# SupportingDocumentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfirmationNo** | Pointer to **string** | Confirmation number of the reservation. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**DocumentCategory** | Pointer to [**FiscalSupportingDocumentCategory**](FiscalSupportingDocumentCategory.md) |  | [optional] 
**DocumentDate** | Pointer to **string** | Supporting document creation date. | [optional] 
**DocumentNo** | Pointer to **int32** | Supporting document number. | [optional] 
**DocumentType** | Pointer to [**FiscalSupportingDocumentType**](FiscalSupportingDocumentType.md) |  | [optional] 
**FiscalStatus** | Pointer to **string** | OPERA Fiscal status. | [optional] 
**FullName** | Pointer to **string** | String representation of the full name | [optional] 
**HotelId** | Pointer to **string** | Unique ID of the hotel | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**RoomId** | Pointer to **string** | Room number of the reservation. | [optional] 

## Methods

### NewSupportingDocumentType

`func NewSupportingDocumentType() *SupportingDocumentType`

NewSupportingDocumentType instantiates a new SupportingDocumentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSupportingDocumentTypeWithDefaults

`func NewSupportingDocumentTypeWithDefaults() *SupportingDocumentType`

NewSupportingDocumentTypeWithDefaults instantiates a new SupportingDocumentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetConfirmationNo

`func (o *SupportingDocumentType) GetConfirmationNo() string`

GetConfirmationNo returns the ConfirmationNo field if non-nil, zero value otherwise.

### GetConfirmationNoOk

`func (o *SupportingDocumentType) GetConfirmationNoOk() (*string, bool)`

GetConfirmationNoOk returns a tuple with the ConfirmationNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfirmationNo

`func (o *SupportingDocumentType) SetConfirmationNo(v string)`

SetConfirmationNo sets ConfirmationNo field to given value.

### HasConfirmationNo

`func (o *SupportingDocumentType) HasConfirmationNo() bool`

HasConfirmationNo returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *SupportingDocumentType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *SupportingDocumentType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *SupportingDocumentType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *SupportingDocumentType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetDocumentCategory

`func (o *SupportingDocumentType) GetDocumentCategory() FiscalSupportingDocumentCategory`

GetDocumentCategory returns the DocumentCategory field if non-nil, zero value otherwise.

### GetDocumentCategoryOk

`func (o *SupportingDocumentType) GetDocumentCategoryOk() (*FiscalSupportingDocumentCategory, bool)`

GetDocumentCategoryOk returns a tuple with the DocumentCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentCategory

`func (o *SupportingDocumentType) SetDocumentCategory(v FiscalSupportingDocumentCategory)`

SetDocumentCategory sets DocumentCategory field to given value.

### HasDocumentCategory

`func (o *SupportingDocumentType) HasDocumentCategory() bool`

HasDocumentCategory returns a boolean if a field has been set.

### GetDocumentDate

`func (o *SupportingDocumentType) GetDocumentDate() string`

GetDocumentDate returns the DocumentDate field if non-nil, zero value otherwise.

### GetDocumentDateOk

`func (o *SupportingDocumentType) GetDocumentDateOk() (*string, bool)`

GetDocumentDateOk returns a tuple with the DocumentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentDate

`func (o *SupportingDocumentType) SetDocumentDate(v string)`

SetDocumentDate sets DocumentDate field to given value.

### HasDocumentDate

`func (o *SupportingDocumentType) HasDocumentDate() bool`

HasDocumentDate returns a boolean if a field has been set.

### GetDocumentNo

`func (o *SupportingDocumentType) GetDocumentNo() int32`

GetDocumentNo returns the DocumentNo field if non-nil, zero value otherwise.

### GetDocumentNoOk

`func (o *SupportingDocumentType) GetDocumentNoOk() (*int32, bool)`

GetDocumentNoOk returns a tuple with the DocumentNo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentNo

`func (o *SupportingDocumentType) SetDocumentNo(v int32)`

SetDocumentNo sets DocumentNo field to given value.

### HasDocumentNo

`func (o *SupportingDocumentType) HasDocumentNo() bool`

HasDocumentNo returns a boolean if a field has been set.

### GetDocumentType

`func (o *SupportingDocumentType) GetDocumentType() FiscalSupportingDocumentType`

GetDocumentType returns the DocumentType field if non-nil, zero value otherwise.

### GetDocumentTypeOk

`func (o *SupportingDocumentType) GetDocumentTypeOk() (*FiscalSupportingDocumentType, bool)`

GetDocumentTypeOk returns a tuple with the DocumentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentType

`func (o *SupportingDocumentType) SetDocumentType(v FiscalSupportingDocumentType)`

SetDocumentType sets DocumentType field to given value.

### HasDocumentType

`func (o *SupportingDocumentType) HasDocumentType() bool`

HasDocumentType returns a boolean if a field has been set.

### GetFiscalStatus

`func (o *SupportingDocumentType) GetFiscalStatus() string`

GetFiscalStatus returns the FiscalStatus field if non-nil, zero value otherwise.

### GetFiscalStatusOk

`func (o *SupportingDocumentType) GetFiscalStatusOk() (*string, bool)`

GetFiscalStatusOk returns a tuple with the FiscalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiscalStatus

`func (o *SupportingDocumentType) SetFiscalStatus(v string)`

SetFiscalStatus sets FiscalStatus field to given value.

### HasFiscalStatus

`func (o *SupportingDocumentType) HasFiscalStatus() bool`

HasFiscalStatus returns a boolean if a field has been set.

### GetFullName

`func (o *SupportingDocumentType) GetFullName() string`

GetFullName returns the FullName field if non-nil, zero value otherwise.

### GetFullNameOk

`func (o *SupportingDocumentType) GetFullNameOk() (*string, bool)`

GetFullNameOk returns a tuple with the FullName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFullName

`func (o *SupportingDocumentType) SetFullName(v string)`

SetFullName sets FullName field to given value.

### HasFullName

`func (o *SupportingDocumentType) HasFullName() bool`

HasFullName returns a boolean if a field has been set.

### GetHotelId

`func (o *SupportingDocumentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *SupportingDocumentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *SupportingDocumentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *SupportingDocumentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *SupportingDocumentType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *SupportingDocumentType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *SupportingDocumentType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *SupportingDocumentType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetRoomId

`func (o *SupportingDocumentType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *SupportingDocumentType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *SupportingDocumentType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *SupportingDocumentType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


