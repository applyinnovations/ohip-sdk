# RateStrategyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StrategyDetail** | Pointer to [**StrategyDetailType**](StrategyDetailType.md) |  | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 

## Methods

### NewRateStrategyType

`func NewRateStrategyType() *RateStrategyType`

NewRateStrategyType instantiates a new RateStrategyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateStrategyTypeWithDefaults

`func NewRateStrategyTypeWithDefaults() *RateStrategyType`

NewRateStrategyTypeWithDefaults instantiates a new RateStrategyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStrategyDetail

`func (o *RateStrategyType) GetStrategyDetail() StrategyDetailType`

GetStrategyDetail returns the StrategyDetail field if non-nil, zero value otherwise.

### GetStrategyDetailOk

`func (o *RateStrategyType) GetStrategyDetailOk() (*StrategyDetailType, bool)`

GetStrategyDetailOk returns a tuple with the StrategyDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStrategyDetail

`func (o *RateStrategyType) SetStrategyDetail(v StrategyDetailType)`

SetStrategyDetail sets StrategyDetail field to given value.

### HasStrategyDetail

`func (o *RateStrategyType) HasStrategyDetail() bool`

HasStrategyDetail returns a boolean if a field has been set.

### GetId

`func (o *RateStrategyType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RateStrategyType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RateStrategyType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RateStrategyType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *RateStrategyType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RateStrategyType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RateStrategyType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RateStrategyType) HasType() bool`

HasType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


