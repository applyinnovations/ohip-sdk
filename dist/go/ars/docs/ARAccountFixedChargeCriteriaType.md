# ARAccountFixedChargeCriteriaType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Schedule** | Pointer to [**FixedChargeScheduleType**](FixedChargeScheduleType.md) |  | [optional] 
**Charge** | Pointer to [**FixedChargeDetailType**](FixedChargeDetailType.md) |  | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**HotelId** | Pointer to **string** | The resort where the AR Account exists. | [optional] 
**AccountId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 

## Methods

### NewARAccountFixedChargeCriteriaType

`func NewARAccountFixedChargeCriteriaType() *ARAccountFixedChargeCriteriaType`

NewARAccountFixedChargeCriteriaType instantiates a new ARAccountFixedChargeCriteriaType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewARAccountFixedChargeCriteriaTypeWithDefaults

`func NewARAccountFixedChargeCriteriaTypeWithDefaults() *ARAccountFixedChargeCriteriaType`

NewARAccountFixedChargeCriteriaTypeWithDefaults instantiates a new ARAccountFixedChargeCriteriaType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSchedule

`func (o *ARAccountFixedChargeCriteriaType) GetSchedule() FixedChargeScheduleType`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *ARAccountFixedChargeCriteriaType) GetScheduleOk() (*FixedChargeScheduleType, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *ARAccountFixedChargeCriteriaType) SetSchedule(v FixedChargeScheduleType)`

SetSchedule sets Schedule field to given value.

### HasSchedule

`func (o *ARAccountFixedChargeCriteriaType) HasSchedule() bool`

HasSchedule returns a boolean if a field has been set.

### GetCharge

`func (o *ARAccountFixedChargeCriteriaType) GetCharge() FixedChargeDetailType`

GetCharge returns the Charge field if non-nil, zero value otherwise.

### GetChargeOk

`func (o *ARAccountFixedChargeCriteriaType) GetChargeOk() (*FixedChargeDetailType, bool)`

GetChargeOk returns a tuple with the Charge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCharge

`func (o *ARAccountFixedChargeCriteriaType) SetCharge(v FixedChargeDetailType)`

SetCharge sets Charge field to given value.

### HasCharge

`func (o *ARAccountFixedChargeCriteriaType) HasCharge() bool`

HasCharge returns a boolean if a field has been set.

### GetUrl

`func (o *ARAccountFixedChargeCriteriaType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *ARAccountFixedChargeCriteriaType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *ARAccountFixedChargeCriteriaType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *ARAccountFixedChargeCriteriaType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *ARAccountFixedChargeCriteriaType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ARAccountFixedChargeCriteriaType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ARAccountFixedChargeCriteriaType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ARAccountFixedChargeCriteriaType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *ARAccountFixedChargeCriteriaType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *ARAccountFixedChargeCriteriaType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *ARAccountFixedChargeCriteriaType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *ARAccountFixedChargeCriteriaType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *ARAccountFixedChargeCriteriaType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *ARAccountFixedChargeCriteriaType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *ARAccountFixedChargeCriteriaType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *ARAccountFixedChargeCriteriaType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *ARAccountFixedChargeCriteriaType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ARAccountFixedChargeCriteriaType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ARAccountFixedChargeCriteriaType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ARAccountFixedChargeCriteriaType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *ARAccountFixedChargeCriteriaType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *ARAccountFixedChargeCriteriaType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *ARAccountFixedChargeCriteriaType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *ARAccountFixedChargeCriteriaType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetHotelId

`func (o *ARAccountFixedChargeCriteriaType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ARAccountFixedChargeCriteriaType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ARAccountFixedChargeCriteriaType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ARAccountFixedChargeCriteriaType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetAccountId

`func (o *ARAccountFixedChargeCriteriaType) GetAccountId() UniqueIDType`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *ARAccountFixedChargeCriteriaType) GetAccountIdOk() (*UniqueIDType, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *ARAccountFixedChargeCriteriaType) SetAccountId(v UniqueIDType)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *ARAccountFixedChargeCriteriaType) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


