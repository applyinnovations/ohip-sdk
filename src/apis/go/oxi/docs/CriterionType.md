# CriterionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Points** | Pointer to **float32** | Weighing points for the given match rule. | [optional] 
**Active** | Pointer to **bool** | The activation flag for the match rule criteria. | [optional] 
**MatchAttributes** | Pointer to [**[]MatchAttributeTypeType**](MatchAttributeTypeType.md) | Rules defining the match Attribute. | [optional] 

## Methods

### NewCriterionType

`func NewCriterionType() *CriterionType`

NewCriterionType instantiates a new CriterionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCriterionTypeWithDefaults

`func NewCriterionTypeWithDefaults() *CriterionType`

NewCriterionTypeWithDefaults instantiates a new CriterionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPoints

`func (o *CriterionType) GetPoints() float32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *CriterionType) GetPointsOk() (*float32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *CriterionType) SetPoints(v float32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *CriterionType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetActive

`func (o *CriterionType) GetActive() bool`

GetActive returns the Active field if non-nil, zero value otherwise.

### GetActiveOk

`func (o *CriterionType) GetActiveOk() (*bool, bool)`

GetActiveOk returns a tuple with the Active field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActive

`func (o *CriterionType) SetActive(v bool)`

SetActive sets Active field to given value.

### HasActive

`func (o *CriterionType) HasActive() bool`

HasActive returns a boolean if a field has been set.

### GetMatchAttributes

`func (o *CriterionType) GetMatchAttributes() []MatchAttributeTypeType`

GetMatchAttributes returns the MatchAttributes field if non-nil, zero value otherwise.

### GetMatchAttributesOk

`func (o *CriterionType) GetMatchAttributesOk() (*[]MatchAttributeTypeType, bool)`

GetMatchAttributesOk returns a tuple with the MatchAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAttributes

`func (o *CriterionType) SetMatchAttributes(v []MatchAttributeTypeType)`

SetMatchAttributes sets MatchAttributes field to given value.

### HasMatchAttributes

`func (o *CriterionType) HasMatchAttributes() bool`

HasMatchAttributes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


