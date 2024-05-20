# FixedChargeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Charge** | Pointer to [**FixedChargeDetailType**](FixedChargeDetailType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**Schedule** | Pointer to [**FixedChargeScheduleType**](FixedChargeScheduleType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewFixedChargeType

`func NewFixedChargeType() *FixedChargeType`

NewFixedChargeType instantiates a new FixedChargeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFixedChargeTypeWithDefaults

`func NewFixedChargeTypeWithDefaults() *FixedChargeType`

NewFixedChargeTypeWithDefaults instantiates a new FixedChargeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCharge

`func (o *FixedChargeType) GetCharge() FixedChargeDetailType`

GetCharge returns the Charge field if non-nil, zero value otherwise.

### GetChargeOk

`func (o *FixedChargeType) GetChargeOk() (*FixedChargeDetailType, bool)`

GetChargeOk returns a tuple with the Charge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharge

`func (o *FixedChargeType) SetCharge(v FixedChargeDetailType)`

SetCharge sets Charge field to given value.

### HasCharge

`func (o *FixedChargeType) HasCharge() bool`

HasCharge returns a boolean if a field has been set.

### GetId

`func (o *FixedChargeType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *FixedChargeType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *FixedChargeType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *FixedChargeType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *FixedChargeType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *FixedChargeType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *FixedChargeType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *FixedChargeType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *FixedChargeType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *FixedChargeType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *FixedChargeType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *FixedChargeType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *FixedChargeType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *FixedChargeType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *FixedChargeType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *FixedChargeType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetSchedule

`func (o *FixedChargeType) GetSchedule() FixedChargeScheduleType`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *FixedChargeType) GetScheduleOk() (*FixedChargeScheduleType, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *FixedChargeType) SetSchedule(v FixedChargeScheduleType)`

SetSchedule sets Schedule field to given value.

### HasSchedule

`func (o *FixedChargeType) HasSchedule() bool`

HasSchedule returns a boolean if a field has been set.

### GetType

`func (o *FixedChargeType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FixedChargeType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FixedChargeType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *FixedChargeType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *FixedChargeType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *FixedChargeType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *FixedChargeType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *FixedChargeType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


