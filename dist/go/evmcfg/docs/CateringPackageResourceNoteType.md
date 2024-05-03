# CateringPackageResourceNoteType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment associated the Catering Package Resource Note. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**Id** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Internal** | Pointer to **bool** | Indiciates if this is Internal. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Title** | Pointer to **string** | Title of the Catering Package Resource Note. | [optional] 

## Methods

### NewCateringPackageResourceNoteType

`func NewCateringPackageResourceNoteType() *CateringPackageResourceNoteType`

NewCateringPackageResourceNoteType instantiates a new CateringPackageResourceNoteType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringPackageResourceNoteTypeWithDefaults

`func NewCateringPackageResourceNoteTypeWithDefaults() *CateringPackageResourceNoteType`

NewCateringPackageResourceNoteTypeWithDefaults instantiates a new CateringPackageResourceNoteType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CateringPackageResourceNoteType) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CateringPackageResourceNoteType) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CateringPackageResourceNoteType) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CateringPackageResourceNoteType) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *CateringPackageResourceNoteType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *CateringPackageResourceNoteType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *CateringPackageResourceNoteType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *CateringPackageResourceNoteType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *CateringPackageResourceNoteType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *CateringPackageResourceNoteType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *CateringPackageResourceNoteType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *CateringPackageResourceNoteType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetId

`func (o *CateringPackageResourceNoteType) GetId() UniqueIDType`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CateringPackageResourceNoteType) GetIdOk() (*UniqueIDType, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CateringPackageResourceNoteType) SetId(v UniqueIDType)`

SetId sets Id field to given value.

### HasId

`func (o *CateringPackageResourceNoteType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetInternal

`func (o *CateringPackageResourceNoteType) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *CateringPackageResourceNoteType) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *CateringPackageResourceNoteType) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *CateringPackageResourceNoteType) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetLastModifierId

`func (o *CateringPackageResourceNoteType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *CateringPackageResourceNoteType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *CateringPackageResourceNoteType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *CateringPackageResourceNoteType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *CateringPackageResourceNoteType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *CateringPackageResourceNoteType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *CateringPackageResourceNoteType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *CateringPackageResourceNoteType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetPurgeDate

`func (o *CateringPackageResourceNoteType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *CateringPackageResourceNoteType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *CateringPackageResourceNoteType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *CateringPackageResourceNoteType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetTitle

`func (o *CateringPackageResourceNoteType) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *CateringPackageResourceNoteType) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *CateringPackageResourceNoteType) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *CateringPackageResourceNoteType) HasTitle() bool`

HasTitle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


