# CommentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActionDate** | Pointer to **string** | Indicates at which date an action described in the comment must be taken. | [optional] 
**ActionType** | Pointer to **string** | Specifies type of action described in the comments. | [optional] 
**CommentTitle** | Pointer to **string** | Specifies Comment&#39;s Title. | [optional] 
**Confidential** | Pointer to **bool** | When true, the comment may be confidential. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**HotelId** | Pointer to **string** | If specified comment belongs to the Hotel, otherwise it is a global comment. | [optional] 
**Image** | Pointer to **string** | An image for this paragraph. | [optional] 
**Internal** | Pointer to **bool** | When true, the comment may not be shown to the consumer. When false, the comment may be shown to the consumer. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**NotificationLocation** | Pointer to **string** | Notification Location associated with the Note. | [optional] 
**OverrideInternal** | Pointer to **bool** | When true, the note internal could be modified. | [optional] 
**ProtectDescription** | Pointer to **bool** | When true, the note title will be populated from the note type description and couldn&#39;t be modified. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**Text** | Pointer to [**FormattedTextTextType**](FormattedTextTextType.md) |  | [optional] 
**Type** | Pointer to **string** | Specifies type of the comment. | [optional] 
**TypeDescription** | Pointer to **string** | Comment type Description. | [optional] 
**Url** | Pointer to **string** | A URL for this paragraph. | [optional] 

## Methods

### NewCommentType

`func NewCommentType() *CommentType`

NewCommentType instantiates a new CommentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommentTypeWithDefaults

`func NewCommentTypeWithDefaults() *CommentType`

NewCommentTypeWithDefaults instantiates a new CommentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActionDate

`func (o *CommentType) GetActionDate() string`

GetActionDate returns the ActionDate field if non-nil, zero value otherwise.

### GetActionDateOk

`func (o *CommentType) GetActionDateOk() (*string, bool)`

GetActionDateOk returns a tuple with the ActionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionDate

`func (o *CommentType) SetActionDate(v string)`

SetActionDate sets ActionDate field to given value.

### HasActionDate

`func (o *CommentType) HasActionDate() bool`

HasActionDate returns a boolean if a field has been set.

### GetActionType

`func (o *CommentType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *CommentType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *CommentType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *CommentType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetCommentTitle

`func (o *CommentType) GetCommentTitle() string`

GetCommentTitle returns the CommentTitle field if non-nil, zero value otherwise.

### GetCommentTitleOk

`func (o *CommentType) GetCommentTitleOk() (*string, bool)`

GetCommentTitleOk returns a tuple with the CommentTitle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentTitle

`func (o *CommentType) SetCommentTitle(v string)`

SetCommentTitle sets CommentTitle field to given value.

### HasCommentTitle

`func (o *CommentType) HasCommentTitle() bool`

HasCommentTitle returns a boolean if a field has been set.

### GetConfidential

`func (o *CommentType) GetConfidential() bool`

GetConfidential returns the Confidential field if non-nil, zero value otherwise.

### GetConfidentialOk

`func (o *CommentType) GetConfidentialOk() (*bool, bool)`

GetConfidentialOk returns a tuple with the Confidential field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfidential

`func (o *CommentType) SetConfidential(v bool)`

SetConfidential sets Confidential field to given value.

### HasConfidential

`func (o *CommentType) HasConfidential() bool`

HasConfidential returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *CommentType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *CommentType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *CommentType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *CommentType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *CommentType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *CommentType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *CommentType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *CommentType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetHotelId

`func (o *CommentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetImage

`func (o *CommentType) GetImage() string`

GetImage returns the Image field if non-nil, zero value otherwise.

### GetImageOk

`func (o *CommentType) GetImageOk() (*string, bool)`

GetImageOk returns a tuple with the Image field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImage

`func (o *CommentType) SetImage(v string)`

SetImage sets Image field to given value.

### HasImage

`func (o *CommentType) HasImage() bool`

HasImage returns a boolean if a field has been set.

### GetInternal

`func (o *CommentType) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *CommentType) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *CommentType) SetInternal(v bool)`

SetInternal sets Internal field to given value.

### HasInternal

`func (o *CommentType) HasInternal() bool`

HasInternal returns a boolean if a field has been set.

### GetLastModifierId

`func (o *CommentType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *CommentType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *CommentType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *CommentType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *CommentType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *CommentType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *CommentType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *CommentType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetNotificationLocation

`func (o *CommentType) GetNotificationLocation() string`

GetNotificationLocation returns the NotificationLocation field if non-nil, zero value otherwise.

### GetNotificationLocationOk

`func (o *CommentType) GetNotificationLocationOk() (*string, bool)`

GetNotificationLocationOk returns a tuple with the NotificationLocation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationLocation

`func (o *CommentType) SetNotificationLocation(v string)`

SetNotificationLocation sets NotificationLocation field to given value.

### HasNotificationLocation

`func (o *CommentType) HasNotificationLocation() bool`

HasNotificationLocation returns a boolean if a field has been set.

### GetOverrideInternal

`func (o *CommentType) GetOverrideInternal() bool`

GetOverrideInternal returns the OverrideInternal field if non-nil, zero value otherwise.

### GetOverrideInternalOk

`func (o *CommentType) GetOverrideInternalOk() (*bool, bool)`

GetOverrideInternalOk returns a tuple with the OverrideInternal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideInternal

`func (o *CommentType) SetOverrideInternal(v bool)`

SetOverrideInternal sets OverrideInternal field to given value.

### HasOverrideInternal

`func (o *CommentType) HasOverrideInternal() bool`

HasOverrideInternal returns a boolean if a field has been set.

### GetProtectDescription

`func (o *CommentType) GetProtectDescription() bool`

GetProtectDescription returns the ProtectDescription field if non-nil, zero value otherwise.

### GetProtectDescriptionOk

`func (o *CommentType) GetProtectDescriptionOk() (*bool, bool)`

GetProtectDescriptionOk returns a tuple with the ProtectDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProtectDescription

`func (o *CommentType) SetProtectDescription(v bool)`

SetProtectDescription sets ProtectDescription field to given value.

### HasProtectDescription

`func (o *CommentType) HasProtectDescription() bool`

HasProtectDescription returns a boolean if a field has been set.

### GetPurgeDate

`func (o *CommentType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *CommentType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *CommentType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *CommentType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetText

`func (o *CommentType) GetText() FormattedTextTextType`

GetText returns the Text field if non-nil, zero value otherwise.

### GetTextOk

`func (o *CommentType) GetTextOk() (*FormattedTextTextType, bool)`

GetTextOk returns a tuple with the Text field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetText

`func (o *CommentType) SetText(v FormattedTextTextType)`

SetText sets Text field to given value.

### HasText

`func (o *CommentType) HasText() bool`

HasText returns a boolean if a field has been set.

### GetType

`func (o *CommentType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommentType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommentType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CommentType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeDescription

`func (o *CommentType) GetTypeDescription() string`

GetTypeDescription returns the TypeDescription field if non-nil, zero value otherwise.

### GetTypeDescriptionOk

`func (o *CommentType) GetTypeDescriptionOk() (*string, bool)`

GetTypeDescriptionOk returns a tuple with the TypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDescription

`func (o *CommentType) SetTypeDescription(v string)`

SetTypeDescription sets TypeDescription field to given value.

### HasTypeDescription

`func (o *CommentType) HasTypeDescription() bool`

HasTypeDescription returns a boolean if a field has been set.

### GetUrl

`func (o *CommentType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CommentType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CommentType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CommentType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

