# ARAccountTraceCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeInfo** | Pointer to [**TraceTimeInfoType**](TraceTimeInfoType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**DepartmentId** | Pointer to **string** | Indicates the Department code. | [optional] 
**TraceText** | Pointer to **string** | The information this trace contains. | [optional] 
**ResolveInfo** | Pointer to [**TraceResolveType**](TraceResolveType.md) |  | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 
**PurgeDate** | Pointer to **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | [optional] 
**HotelId** | Pointer to **string** | The resort where the AR Account exists. | [optional] 
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewARAccountTraceCriteriaType

`func NewARAccountTraceCriteriaType() *ARAccountTraceCriteriaType`

NewARAccountTraceCriteriaType instantiates a new ARAccountTraceCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountTraceCriteriaTypeWithDefaults

`func NewARAccountTraceCriteriaTypeWithDefaults() *ARAccountTraceCriteriaType`

NewARAccountTraceCriteriaTypeWithDefaults instantiates a new ARAccountTraceCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeInfo

`func (o *ARAccountTraceCriteriaType) GetTimeInfo() TraceTimeInfoType`

GetTimeInfo returns the TimeInfo field if non-nil, zero value otherwise.

### GetTimeInfoOk

`func (o *ARAccountTraceCriteriaType) GetTimeInfoOk() (*TraceTimeInfoType, bool)`

GetTimeInfoOk returns a tuple with the TimeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInfo

`func (o *ARAccountTraceCriteriaType) SetTimeInfo(v TraceTimeInfoType)`

SetTimeInfo sets TimeInfo field to given value.

### HasTimeInfo

`func (o *ARAccountTraceCriteriaType) HasTimeInfo() bool`

HasTimeInfo returns a boolean if a field has been set.

### GetReservationId

`func (o *ARAccountTraceCriteriaType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *ARAccountTraceCriteriaType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *ARAccountTraceCriteriaType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *ARAccountTraceCriteriaType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetDepartmentId

`func (o *ARAccountTraceCriteriaType) GetDepartmentId() string`

GetDepartmentId returns the DepartmentId field if non-nil, zero value otherwise.

### GetDepartmentIdOk

`func (o *ARAccountTraceCriteriaType) GetDepartmentIdOk() (*string, bool)`

GetDepartmentIdOk returns a tuple with the DepartmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentId

`func (o *ARAccountTraceCriteriaType) SetDepartmentId(v string)`

SetDepartmentId sets DepartmentId field to given value.

### HasDepartmentId

`func (o *ARAccountTraceCriteriaType) HasDepartmentId() bool`

HasDepartmentId returns a boolean if a field has been set.

### GetTraceText

`func (o *ARAccountTraceCriteriaType) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *ARAccountTraceCriteriaType) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *ARAccountTraceCriteriaType) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *ARAccountTraceCriteriaType) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.

### GetResolveInfo

`func (o *ARAccountTraceCriteriaType) GetResolveInfo() TraceResolveType`

GetResolveInfo returns the ResolveInfo field if non-nil, zero value otherwise.

### GetResolveInfoOk

`func (o *ARAccountTraceCriteriaType) GetResolveInfoOk() (*TraceResolveType, bool)`

GetResolveInfoOk returns a tuple with the ResolveInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveInfo

`func (o *ARAccountTraceCriteriaType) SetResolveInfo(v TraceResolveType)`

SetResolveInfo sets ResolveInfo field to given value.

### HasResolveInfo

`func (o *ARAccountTraceCriteriaType) HasResolveInfo() bool`

HasResolveInfo returns a boolean if a field has been set.

### GetUrl

`func (o *ARAccountTraceCriteriaType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ARAccountTraceCriteriaType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ARAccountTraceCriteriaType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ARAccountTraceCriteriaType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *ARAccountTraceCriteriaType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ARAccountTraceCriteriaType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ARAccountTraceCriteriaType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ARAccountTraceCriteriaType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *ARAccountTraceCriteriaType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ARAccountTraceCriteriaType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ARAccountTraceCriteriaType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ARAccountTraceCriteriaType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *ARAccountTraceCriteriaType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ARAccountTraceCriteriaType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ARAccountTraceCriteriaType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ARAccountTraceCriteriaType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *ARAccountTraceCriteriaType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ARAccountTraceCriteriaType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ARAccountTraceCriteriaType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ARAccountTraceCriteriaType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *ARAccountTraceCriteriaType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ARAccountTraceCriteriaType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ARAccountTraceCriteriaType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ARAccountTraceCriteriaType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ARAccountTraceCriteriaType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ARAccountTraceCriteriaType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ARAccountTraceCriteriaType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ARAccountTraceCriteriaType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ARAccountTraceCriteriaType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ARAccountTraceCriteriaType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ARAccountTraceCriteriaType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ARAccountTraceCriteriaType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ARAccountTraceCriteriaType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ARAccountTraceCriteriaType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ARAccountTraceCriteriaType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ARAccountTraceCriteriaType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ARAccountTraceCriteriaType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ARAccountTraceCriteriaType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ARAccountTraceCriteriaType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ARAccountTraceCriteriaType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *ARAccountTraceCriteriaType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *ARAccountTraceCriteriaType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *ARAccountTraceCriteriaType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *ARAccountTraceCriteriaType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.

### GetHotelId

`func (o *ARAccountTraceCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARAccountTraceCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARAccountTraceCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARAccountTraceCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetAccountId

`func (o *ARAccountTraceCriteriaType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARAccountTraceCriteriaType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARAccountTraceCriteriaType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARAccountTraceCriteriaType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


