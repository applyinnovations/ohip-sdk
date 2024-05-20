# CommissionProcessingReservationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**Instructions** | Pointer to [**CommissionProcessingInstructionsType**](CommissionProcessingInstructionsType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewCommissionProcessingReservationType

`func NewCommissionProcessingReservationType() *CommissionProcessingReservationType`

NewCommissionProcessingReservationType instantiates a new CommissionProcessingReservationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionProcessingReservationTypeWithDefaults

`func NewCommissionProcessingReservationTypeWithDefaults() *CommissionProcessingReservationType`

NewCommissionProcessingReservationTypeWithDefaults instantiates a new CommissionProcessingReservationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CommissionProcessingReservationType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommissionProcessingReservationType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommissionProcessingReservationType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CommissionProcessingReservationType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *CommissionProcessingReservationType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *CommissionProcessingReservationType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *CommissionProcessingReservationType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *CommissionProcessingReservationType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *CommissionProcessingReservationType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *CommissionProcessingReservationType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *CommissionProcessingReservationType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *CommissionProcessingReservationType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *CommissionProcessingReservationType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *CommissionProcessingReservationType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *CommissionProcessingReservationType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *CommissionProcessingReservationType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetInstructions

`func (o *CommissionProcessingReservationType) GetInstructions() CommissionProcessingInstructionsType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *CommissionProcessingReservationType) GetInstructionsOk() (*CommissionProcessingInstructionsType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *CommissionProcessingReservationType) SetInstructions(v CommissionProcessingInstructionsType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *CommissionProcessingReservationType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetType

`func (o *CommissionProcessingReservationType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommissionProcessingReservationType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommissionProcessingReservationType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CommissionProcessingReservationType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *CommissionProcessingReservationType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CommissionProcessingReservationType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CommissionProcessingReservationType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CommissionProcessingReservationType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


