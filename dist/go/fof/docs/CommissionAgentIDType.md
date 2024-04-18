# CommissionAgentIDType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommissionAgentType** | Pointer to [**CommissionAgentTypeType**](CommissionAgentTypeType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewCommissionAgentIDType

`func NewCommissionAgentIDType() *CommissionAgentIDType`

NewCommissionAgentIDType instantiates a new CommissionAgentIDType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommissionAgentIDTypeWithDefaults

`func NewCommissionAgentIDTypeWithDefaults() *CommissionAgentIDType`

NewCommissionAgentIDTypeWithDefaults instantiates a new CommissionAgentIDType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommissionAgentType

`func (o *CommissionAgentIDType) GetCommissionAgentType() CommissionAgentTypeType`

GetCommissionAgentType returns the CommissionAgentType field if non-nil, zero value otherwise.

### GetCommissionAgentTypeOk

`func (o *CommissionAgentIDType) GetCommissionAgentTypeOk() (*CommissionAgentTypeType, bool)`

GetCommissionAgentTypeOk returns a tuple with the CommissionAgentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommissionAgentType

`func (o *CommissionAgentIDType) SetCommissionAgentType(v CommissionAgentTypeType)`

SetCommissionAgentType sets CommissionAgentType field to given value.

### HasCommissionAgentType

`func (o *CommissionAgentIDType) HasCommissionAgentType() bool`

HasCommissionAgentType returns a boolean if a field has been set.

### GetId

`func (o *CommissionAgentIDType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommissionAgentIDType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommissionAgentIDType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CommissionAgentIDType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *CommissionAgentIDType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommissionAgentIDType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommissionAgentIDType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CommissionAgentIDType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

