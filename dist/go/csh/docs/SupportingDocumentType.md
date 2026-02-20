# SupportingDocumentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Unique ID of the hotel | [optional] 
**DocumentDate** | Pointer to **string** | Supporting document creation date. | [optional] 
**DocumentNo** | Pointer to **int32** | Supporting document number. | [optional] 
**DocumentType** | Pointer to [**FiscalSupportingDocumentType**](FiscalSupportingDocumentType.md) |  | [optional] 
**DocumentCategory** | Pointer to [**FiscalSupportingDocumentCategory**](FiscalSupportingDocumentCategory.md) |  | [optional] 
**FiscalStatus** | Pointer to **string** | OPERA Fiscal status. | [optional] 
**RoomId** | Pointer to **string** | Room number of the reservation. | [optional] 
**ConfirmationNo** | Pointer to **string** | Confirmation number of the reservation. | [optional] 
**FullName** | Pointer to **string** | String representation of the full name | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**ResvNameId** | Pointer to **string** | Reservation Name ID. | [optional] 
**ProfileId** | Pointer to **string** | Unique ID of the profile. | [optional] 
**ProfileType** | Pointer to [**NameTypeType**](NameTypeType.md) |  | [optional] 
**ReportModuleId** | Pointer to **string** | The internal report ID of the Folio report which is to be used. | [optional] 
**DocumentRefId** | Pointer to **string** | The internal reference ID of the document type. | [optional] 

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

### GetResvNameId

`func (o *SupportingDocumentType) GetResvNameId() string`

GetResvNameId returns the ResvNameId field if non-nil, zero value otherwise.

### GetResvNameIdOk

`func (o *SupportingDocumentType) GetResvNameIdOk() (*string, bool)`

GetResvNameIdOk returns a tuple with the ResvNameId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResvNameId

`func (o *SupportingDocumentType) SetResvNameId(v string)`

SetResvNameId sets ResvNameId field to given value.

### HasResvNameId

`func (o *SupportingDocumentType) HasResvNameId() bool`

HasResvNameId returns a boolean if a field has been set.

### GetProfileId

`func (o *SupportingDocumentType) GetProfileId() string`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *SupportingDocumentType) GetProfileIdOk() (*string, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *SupportingDocumentType) SetProfileId(v string)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *SupportingDocumentType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.

### GetProfileType

`func (o *SupportingDocumentType) GetProfileType() NameTypeType`

GetProfileType returns the ProfileType field if non-nil, zero value otherwise.

### GetProfileTypeOk

`func (o *SupportingDocumentType) GetProfileTypeOk() (*NameTypeType, bool)`

GetProfileTypeOk returns a tuple with the ProfileType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileType

`func (o *SupportingDocumentType) SetProfileType(v NameTypeType)`

SetProfileType sets ProfileType field to given value.

### HasProfileType

`func (o *SupportingDocumentType) HasProfileType() bool`

HasProfileType returns a boolean if a field has been set.

### GetReportModuleId

`func (o *SupportingDocumentType) GetReportModuleId() string`

GetReportModuleId returns the ReportModuleId field if non-nil, zero value otherwise.

### GetReportModuleIdOk

`func (o *SupportingDocumentType) GetReportModuleIdOk() (*string, bool)`

GetReportModuleIdOk returns a tuple with the ReportModuleId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReportModuleId

`func (o *SupportingDocumentType) SetReportModuleId(v string)`

SetReportModuleId sets ReportModuleId field to given value.

### HasReportModuleId

`func (o *SupportingDocumentType) HasReportModuleId() bool`

HasReportModuleId returns a boolean if a field has been set.

### GetDocumentRefId

`func (o *SupportingDocumentType) GetDocumentRefId() string`

GetDocumentRefId returns the DocumentRefId field if non-nil, zero value otherwise.

### GetDocumentRefIdOk

`func (o *SupportingDocumentType) GetDocumentRefIdOk() (*string, bool)`

GetDocumentRefIdOk returns a tuple with the DocumentRefId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDocumentRefId

`func (o *SupportingDocumentType) SetDocumentRefId(v string)`

SetDocumentRefId sets DocumentRefId field to given value.

### HasDocumentRefId

`func (o *SupportingDocumentType) HasDocumentRefId() bool`

HasDocumentRefId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


