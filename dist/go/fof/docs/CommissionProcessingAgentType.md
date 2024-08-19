# CommissionProcessingAgentType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property from which the agent will be on hold for commission. | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**Instructions** | Pointer to [**CommissionProcessingInstructionsType**](CommissionProcessingInstructionsType.md) |  | [optional] 
**Reservations** | Pointer to [**[]CommissionProcessingReservationType**](CommissionProcessingReservationType.md) | Commission processing instructions for a reservation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewCommissionProcessingAgentType

`func NewCommissionProcessingAgentType() *CommissionProcessingAgentType`

NewCommissionProcessingAgentType instantiates a new CommissionProcessingAgentType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionProcessingAgentTypeWithDefaults

`func NewCommissionProcessingAgentTypeWithDefaults() *CommissionProcessingAgentType`

NewCommissionProcessingAgentTypeWithDefaults instantiates a new CommissionProcessingAgentType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CommissionProcessingAgentType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CommissionProcessingAgentType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CommissionProcessingAgentType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CommissionProcessingAgentType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *CommissionProcessingAgentType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommissionProcessingAgentType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommissionProcessingAgentType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CommissionProcessingAgentType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *CommissionProcessingAgentType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *CommissionProcessingAgentType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *CommissionProcessingAgentType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *CommissionProcessingAgentType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *CommissionProcessingAgentType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *CommissionProcessingAgentType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *CommissionProcessingAgentType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *CommissionProcessingAgentType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *CommissionProcessingAgentType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *CommissionProcessingAgentType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *CommissionProcessingAgentType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *CommissionProcessingAgentType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetInstructions

`func (o *CommissionProcessingAgentType) GetInstructions() CommissionProcessingInstructionsType`

GetInstructions returns the Instructions field if non-nil, zero value otherwise.

### GetInstructionsOk

`func (o *CommissionProcessingAgentType) GetInstructionsOk() (*CommissionProcessingInstructionsType, bool)`

GetInstructionsOk returns a tuple with the Instructions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstructions

`func (o *CommissionProcessingAgentType) SetInstructions(v CommissionProcessingInstructionsType)`

SetInstructions sets Instructions field to given value.

### HasInstructions

`func (o *CommissionProcessingAgentType) HasInstructions() bool`

HasInstructions returns a boolean if a field has been set.

### GetReservations

`func (o *CommissionProcessingAgentType) GetReservations() []CommissionProcessingReservationType`

GetReservations returns the Reservations field if non-nil, zero value otherwise.

### GetReservationsOk

`func (o *CommissionProcessingAgentType) GetReservationsOk() (*[]CommissionProcessingReservationType, bool)`

GetReservationsOk returns a tuple with the Reservations field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservations

`func (o *CommissionProcessingAgentType) SetReservations(v []CommissionProcessingReservationType)`

SetReservations sets Reservations field to given value.

### HasReservations

`func (o *CommissionProcessingAgentType) HasReservations() bool`

HasReservations returns a boolean if a field has been set.

### GetType

`func (o *CommissionProcessingAgentType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommissionProcessingAgentType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommissionProcessingAgentType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CommissionProcessingAgentType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *CommissionProcessingAgentType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CommissionProcessingAgentType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CommissionProcessingAgentType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CommissionProcessingAgentType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


