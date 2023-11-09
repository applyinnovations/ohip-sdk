# CalendarTaskType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountIdList** | Pointer to [**UniqueNameIDListType**](UniqueNameIDListType.md) |  | [optional] 
**AttachmentsCount** | Pointer to **int32** | Count of the attachments that are attached to the task. | [optional] 
**Author** | Pointer to **string** | Author of the calendar task. | [optional] 
**BlockIdList** | Pointer to [**UniqueNameIDListType**](UniqueNameIDListType.md) |  | [optional] 
**ClassCode** | Pointer to [**CalendarTaskClassType**](CalendarTaskClassType.md) |  | [optional] 
**ContactIdList** | Pointer to [**UniqueNameIDListType**](UniqueNameIDListType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel code of calendar task. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**Notes** | Pointer to **string** | Additional notes and information regarding calendar task. | [optional] 
**PriorityInfo** | Pointer to [**CalendarTaskPriorityType**](CalendarTaskPriorityType.md) |  | [optional] 
**Purpose** | Pointer to **string** | Brief description and purpose of calendar task. | [optional] 
**Status** | Pointer to [**CalendarTaskTypeStatus**](CalendarTaskTypeStatus.md) |  | [optional] 
**TaskOwner** | Pointer to **string** | Owner code of the person to whom the calendar task is assigned. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**TypeCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewCalendarTaskType

`func NewCalendarTaskType() *CalendarTaskType`

NewCalendarTaskType instantiates a new CalendarTaskType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCalendarTaskTypeWithDefaults

`func NewCalendarTaskTypeWithDefaults() *CalendarTaskType`

NewCalendarTaskTypeWithDefaults instantiates a new CalendarTaskType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountIdList

`func (o *CalendarTaskType) GetAccountIdList() UniqueNameIDListType`

GetAccountIdList returns the AccountIdList field if non-nil, zero value otherwise.

### GetAccountIdListOk

`func (o *CalendarTaskType) GetAccountIdListOk() (*UniqueNameIDListType, bool)`

GetAccountIdListOk returns a tuple with the AccountIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountIdList

`func (o *CalendarTaskType) SetAccountIdList(v UniqueNameIDListType)`

SetAccountIdList sets AccountIdList field to given value.

### HasAccountIdList

`func (o *CalendarTaskType) HasAccountIdList() bool`

HasAccountIdList returns a boolean if a field has been set.

### GetAttachmentsCount

`func (o *CalendarTaskType) GetAttachmentsCount() int32`

GetAttachmentsCount returns the AttachmentsCount field if non-nil, zero value otherwise.

### GetAttachmentsCountOk

`func (o *CalendarTaskType) GetAttachmentsCountOk() (*int32, bool)`

GetAttachmentsCountOk returns a tuple with the AttachmentsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttachmentsCount

`func (o *CalendarTaskType) SetAttachmentsCount(v int32)`

SetAttachmentsCount sets AttachmentsCount field to given value.

### HasAttachmentsCount

`func (o *CalendarTaskType) HasAttachmentsCount() bool`

HasAttachmentsCount returns a boolean if a field has been set.

### GetAuthor

`func (o *CalendarTaskType) GetAuthor() string`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *CalendarTaskType) GetAuthorOk() (*string, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *CalendarTaskType) SetAuthor(v string)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *CalendarTaskType) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetBlockIdList

`func (o *CalendarTaskType) GetBlockIdList() UniqueNameIDListType`

GetBlockIdList returns the BlockIdList field if non-nil, zero value otherwise.

### GetBlockIdListOk

`func (o *CalendarTaskType) GetBlockIdListOk() (*UniqueNameIDListType, bool)`

GetBlockIdListOk returns a tuple with the BlockIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBlockIdList

`func (o *CalendarTaskType) SetBlockIdList(v UniqueNameIDListType)`

SetBlockIdList sets BlockIdList field to given value.

### HasBlockIdList

`func (o *CalendarTaskType) HasBlockIdList() bool`

HasBlockIdList returns a boolean if a field has been set.

### GetClassCode

`func (o *CalendarTaskType) GetClassCode() CalendarTaskClassType`

GetClassCode returns the ClassCode field if non-nil, zero value otherwise.

### GetClassCodeOk

`func (o *CalendarTaskType) GetClassCodeOk() (*CalendarTaskClassType, bool)`

GetClassCodeOk returns a tuple with the ClassCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassCode

`func (o *CalendarTaskType) SetClassCode(v CalendarTaskClassType)`

SetClassCode sets ClassCode field to given value.

### HasClassCode

`func (o *CalendarTaskType) HasClassCode() bool`

HasClassCode returns a boolean if a field has been set.

### GetContactIdList

`func (o *CalendarTaskType) GetContactIdList() UniqueNameIDListType`

GetContactIdList returns the ContactIdList field if non-nil, zero value otherwise.

### GetContactIdListOk

`func (o *CalendarTaskType) GetContactIdListOk() (*UniqueNameIDListType, bool)`

GetContactIdListOk returns a tuple with the ContactIdList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContactIdList

`func (o *CalendarTaskType) SetContactIdList(v UniqueNameIDListType)`

SetContactIdList sets ContactIdList field to given value.

### HasContactIdList

`func (o *CalendarTaskType) HasContactIdList() bool`

HasContactIdList returns a boolean if a field has been set.

### GetHotelId

`func (o *CalendarTaskType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CalendarTaskType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CalendarTaskType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CalendarTaskType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *CalendarTaskType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CalendarTaskType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CalendarTaskType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CalendarTaskType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *CalendarTaskType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *CalendarTaskType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *CalendarTaskType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *CalendarTaskType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *CalendarTaskType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *CalendarTaskType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *CalendarTaskType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *CalendarTaskType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *CalendarTaskType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *CalendarTaskType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *CalendarTaskType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *CalendarTaskType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetNotes

`func (o *CalendarTaskType) GetNotes() string`

GetNotes returns the Notes field if non-nil, zero value otherwise.

### GetNotesOk

`func (o *CalendarTaskType) GetNotesOk() (*string, bool)`

GetNotesOk returns a tuple with the Notes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotes

`func (o *CalendarTaskType) SetNotes(v string)`

SetNotes sets Notes field to given value.

### HasNotes

`func (o *CalendarTaskType) HasNotes() bool`

HasNotes returns a boolean if a field has been set.

### GetPriorityInfo

`func (o *CalendarTaskType) GetPriorityInfo() CalendarTaskPriorityType`

GetPriorityInfo returns the PriorityInfo field if non-nil, zero value otherwise.

### GetPriorityInfoOk

`func (o *CalendarTaskType) GetPriorityInfoOk() (*CalendarTaskPriorityType, bool)`

GetPriorityInfoOk returns a tuple with the PriorityInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriorityInfo

`func (o *CalendarTaskType) SetPriorityInfo(v CalendarTaskPriorityType)`

SetPriorityInfo sets PriorityInfo field to given value.

### HasPriorityInfo

`func (o *CalendarTaskType) HasPriorityInfo() bool`

HasPriorityInfo returns a boolean if a field has been set.

### GetPurpose

`func (o *CalendarTaskType) GetPurpose() string`

GetPurpose returns the Purpose field if non-nil, zero value otherwise.

### GetPurposeOk

`func (o *CalendarTaskType) GetPurposeOk() (*string, bool)`

GetPurposeOk returns a tuple with the Purpose field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurpose

`func (o *CalendarTaskType) SetPurpose(v string)`

SetPurpose sets Purpose field to given value.

### HasPurpose

`func (o *CalendarTaskType) HasPurpose() bool`

HasPurpose returns a boolean if a field has been set.

### GetStatus

`func (o *CalendarTaskType) GetStatus() CalendarTaskTypeStatus`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *CalendarTaskType) GetStatusOk() (*CalendarTaskTypeStatus, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *CalendarTaskType) SetStatus(v CalendarTaskTypeStatus)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *CalendarTaskType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTaskOwner

`func (o *CalendarTaskType) GetTaskOwner() string`

GetTaskOwner returns the TaskOwner field if non-nil, zero value otherwise.

### GetTaskOwnerOk

`func (o *CalendarTaskType) GetTaskOwnerOk() (*string, bool)`

GetTaskOwnerOk returns a tuple with the TaskOwner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskOwner

`func (o *CalendarTaskType) SetTaskOwner(v string)`

SetTaskOwner sets TaskOwner field to given value.

### HasTaskOwner

`func (o *CalendarTaskType) HasTaskOwner() bool`

HasTaskOwner returns a boolean if a field has been set.

### GetTimeSpan

`func (o *CalendarTaskType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *CalendarTaskType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *CalendarTaskType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *CalendarTaskType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.

### GetType

`func (o *CalendarTaskType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CalendarTaskType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CalendarTaskType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CalendarTaskType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeCode

`func (o *CalendarTaskType) GetTypeCode() CodeDescriptionType`

GetTypeCode returns the TypeCode field if non-nil, zero value otherwise.

### GetTypeCodeOk

`func (o *CalendarTaskType) GetTypeCodeOk() (*CodeDescriptionType, bool)`

GetTypeCodeOk returns a tuple with the TypeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeCode

`func (o *CalendarTaskType) SetTypeCode(v CodeDescriptionType)`

SetTypeCode sets TypeCode field to given value.

### HasTypeCode

`func (o *CalendarTaskType) HasTypeCode() bool`

HasTypeCode returns a boolean if a field has been set.

### GetUrl

`func (o *CalendarTaskType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CalendarTaskType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CalendarTaskType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CalendarTaskType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


