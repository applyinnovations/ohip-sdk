# AttachmentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description for the file. | [optional] 
**FileName** | Pointer to **string** | Name of the file. | [optional] 
**FileSize** | Pointer to **int32** | Size of the file. | [optional] 
**Global** | Pointer to **bool** | Flag to say if attachment is available across properties. | [optional] 
**History** | Pointer to [**DateTimeStampGroupType**](DateTimeStampGroupType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewAttachmentType

`func NewAttachmentType() *AttachmentType`

NewAttachmentType instantiates a new AttachmentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttachmentTypeWithDefaults

`func NewAttachmentTypeWithDefaults() *AttachmentType`

NewAttachmentTypeWithDefaults instantiates a new AttachmentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *AttachmentType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AttachmentType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AttachmentType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AttachmentType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFileName

`func (o *AttachmentType) GetFileName() string`

GetFileName returns the FileName field if non-nil, zero value otherwise.

### GetFileNameOk

`func (o *AttachmentType) GetFileNameOk() (*string, bool)`

GetFileNameOk returns a tuple with the FileName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileName

`func (o *AttachmentType) SetFileName(v string)`

SetFileName sets FileName field to given value.

### HasFileName

`func (o *AttachmentType) HasFileName() bool`

HasFileName returns a boolean if a field has been set.

### GetFileSize

`func (o *AttachmentType) GetFileSize() int32`

GetFileSize returns the FileSize field if non-nil, zero value otherwise.

### GetFileSizeOk

`func (o *AttachmentType) GetFileSizeOk() (*int32, bool)`

GetFileSizeOk returns a tuple with the FileSize field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileSize

`func (o *AttachmentType) SetFileSize(v int32)`

SetFileSize sets FileSize field to given value.

### HasFileSize

`func (o *AttachmentType) HasFileSize() bool`

HasFileSize returns a boolean if a field has been set.

### GetGlobal

`func (o *AttachmentType) GetGlobal() bool`

GetGlobal returns the Global field if non-nil, zero value otherwise.

### GetGlobalOk

`func (o *AttachmentType) GetGlobalOk() (*bool, bool)`

GetGlobalOk returns a tuple with the Global field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGlobal

`func (o *AttachmentType) SetGlobal(v bool)`

SetGlobal sets Global field to given value.

### HasGlobal

`func (o *AttachmentType) HasGlobal() bool`

HasGlobal returns a boolean if a field has been set.

### GetHistory

`func (o *AttachmentType) GetHistory() DateTimeStampGroupType`

GetHistory returns the History field if non-nil, zero value otherwise.

### GetHistoryOk

`func (o *AttachmentType) GetHistoryOk() (*DateTimeStampGroupType, bool)`

GetHistoryOk returns a tuple with the History field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHistory

`func (o *AttachmentType) SetHistory(v DateTimeStampGroupType)`

SetHistory sets History field to given value.

### HasHistory

`func (o *AttachmentType) HasHistory() bool`

HasHistory returns a boolean if a field has been set.

### GetHotelId

`func (o *AttachmentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AttachmentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AttachmentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AttachmentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *AttachmentType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AttachmentType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AttachmentType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AttachmentType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *AttachmentType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *AttachmentType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *AttachmentType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *AttachmentType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetInstance

`func (o *AttachmentType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *AttachmentType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *AttachmentType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *AttachmentType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetType

`func (o *AttachmentType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttachmentType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttachmentType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttachmentType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *AttachmentType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *AttachmentType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *AttachmentType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *AttachmentType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


