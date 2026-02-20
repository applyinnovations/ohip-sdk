# ResvGuestMessageType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to [**ResvMessageType**](ResvMessageType.md) |  | [optional] 
**Delivery** | Pointer to [**MessageDeliveryType**](MessageDeliveryType.md) |  | [optional] 
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

## Methods

### NewResvGuestMessageType

`func NewResvGuestMessageType() *ResvGuestMessageType`

NewResvGuestMessageType instantiates a new ResvGuestMessageType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResvGuestMessageTypeWithDefaults

`func NewResvGuestMessageTypeWithDefaults() *ResvGuestMessageType`

NewResvGuestMessageTypeWithDefaults instantiates a new ResvGuestMessageType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ResvGuestMessageType) GetMessage() ResvMessageType`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ResvGuestMessageType) GetMessageOk() (*ResvMessageType, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ResvGuestMessageType) SetMessage(v ResvMessageType)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ResvGuestMessageType) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetDelivery

`func (o *ResvGuestMessageType) GetDelivery() MessageDeliveryType`

GetDelivery returns the Delivery field if non-nil, zero value otherwise.

### GetDeliveryOk

`func (o *ResvGuestMessageType) GetDeliveryOk() (*MessageDeliveryType, bool)`

GetDeliveryOk returns a tuple with the Delivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelivery

`func (o *ResvGuestMessageType) SetDelivery(v MessageDeliveryType)`

SetDelivery sets Delivery field to given value.

### HasDelivery

`func (o *ResvGuestMessageType) HasDelivery() bool`

HasDelivery returns a boolean if a field has been set.

### GetUrl

`func (o *ResvGuestMessageType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ResvGuestMessageType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ResvGuestMessageType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ResvGuestMessageType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *ResvGuestMessageType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ResvGuestMessageType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ResvGuestMessageType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ResvGuestMessageType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *ResvGuestMessageType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ResvGuestMessageType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ResvGuestMessageType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ResvGuestMessageType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *ResvGuestMessageType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ResvGuestMessageType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ResvGuestMessageType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ResvGuestMessageType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *ResvGuestMessageType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ResvGuestMessageType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ResvGuestMessageType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ResvGuestMessageType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *ResvGuestMessageType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ResvGuestMessageType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ResvGuestMessageType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ResvGuestMessageType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *ResvGuestMessageType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *ResvGuestMessageType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *ResvGuestMessageType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *ResvGuestMessageType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *ResvGuestMessageType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *ResvGuestMessageType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *ResvGuestMessageType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *ResvGuestMessageType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *ResvGuestMessageType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *ResvGuestMessageType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *ResvGuestMessageType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *ResvGuestMessageType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *ResvGuestMessageType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *ResvGuestMessageType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *ResvGuestMessageType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *ResvGuestMessageType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.

### GetPurgeDate

`func (o *ResvGuestMessageType) GetPurgeDate() string`

GetPurgeDate returns the PurgeDate field if non-nil, zero value otherwise.

### GetPurgeDateOk

`func (o *ResvGuestMessageType) GetPurgeDateOk() (*string, bool)`

GetPurgeDateOk returns a tuple with the PurgeDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPurgeDate

`func (o *ResvGuestMessageType) SetPurgeDate(v string)`

SetPurgeDate sets PurgeDate field to given value.

### HasPurgeDate

`func (o *ResvGuestMessageType) HasPurgeDate() bool`

HasPurgeDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


