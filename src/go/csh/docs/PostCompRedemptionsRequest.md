# PostCompRedemptionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Criteria** | Pointer to [**PostCompRedemptionsCriteria**](PostCompRedemptionsCriteria.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostCompRedemptionsRequest

`func NewPostCompRedemptionsRequest() *PostCompRedemptionsRequest`

NewPostCompRedemptionsRequest instantiates a new PostCompRedemptionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCompRedemptionsRequestWithDefaults

`func NewPostCompRedemptionsRequestWithDefaults() *PostCompRedemptionsRequest`

NewPostCompRedemptionsRequestWithDefaults instantiates a new PostCompRedemptionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCriteria

`func (o *PostCompRedemptionsRequest) GetCriteria() PostCompRedemptionsCriteria`

GetCriteria returns the Criteria field if non-nil, zero value otherwise.

### GetCriteriaOk

`func (o *PostCompRedemptionsRequest) GetCriteriaOk() (*PostCompRedemptionsCriteria, bool)`

GetCriteriaOk returns a tuple with the Criteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCriteria

`func (o *PostCompRedemptionsRequest) SetCriteria(v PostCompRedemptionsCriteria)`

SetCriteria sets Criteria field to given value.

### HasCriteria

`func (o *PostCompRedemptionsRequest) HasCriteria() bool`

HasCriteria returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCompRedemptionsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCompRedemptionsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCompRedemptionsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCompRedemptionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


