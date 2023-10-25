# MembershipTypeRulePointsDefinitionType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CostPerPoint** | Pointer to **int32** | Indicates the cost per point for this membership program. | [optional] 
**ExcludePointProjection** | Pointer to **bool** | Determines while calculating points projection should the rule be excluded or included. Default is included(N). | [optional] 
**PercentagePoints** | Pointer to **bool** | Points ratio is expressed in terms of %. | [optional] 
**Points** | Pointer to **int32** | Specifies the ratio of the points accumulated per Stay or Night or Revenue. This ratio multiplied by the actual Stays or Nights or Revenue will give the Total points accumulated. | [optional] 
**PointsRoundingFlag** | Pointer to [**PointsRoundingFlagType**](PointsRoundingFlagType.md) |  | [optional] 
**RevenueUnits** | Pointer to **int32** | Specifies the minimum units needed. | [optional] 

## Methods

### NewMembershipTypeRulePointsDefinitionType

`func NewMembershipTypeRulePointsDefinitionType() *MembershipTypeRulePointsDefinitionType`

NewMembershipTypeRulePointsDefinitionType instantiates a new MembershipTypeRulePointsDefinitionType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTypeRulePointsDefinitionTypeWithDefaults

`func NewMembershipTypeRulePointsDefinitionTypeWithDefaults() *MembershipTypeRulePointsDefinitionType`

NewMembershipTypeRulePointsDefinitionTypeWithDefaults instantiates a new MembershipTypeRulePointsDefinitionType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCostPerPoint

`func (o *MembershipTypeRulePointsDefinitionType) GetCostPerPoint() int32`

GetCostPerPoint returns the CostPerPoint field if non-nil, zero value otherwise.

### GetCostPerPointOk

`func (o *MembershipTypeRulePointsDefinitionType) GetCostPerPointOk() (*int32, bool)`

GetCostPerPointOk returns a tuple with the CostPerPoint field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCostPerPoint

`func (o *MembershipTypeRulePointsDefinitionType) SetCostPerPoint(v int32)`

SetCostPerPoint sets CostPerPoint field to given value.

### HasCostPerPoint

`func (o *MembershipTypeRulePointsDefinitionType) HasCostPerPoint() bool`

HasCostPerPoint returns a boolean if a field has been set.

### GetExcludePointProjection

`func (o *MembershipTypeRulePointsDefinitionType) GetExcludePointProjection() bool`

GetExcludePointProjection returns the ExcludePointProjection field if non-nil, zero value otherwise.

### GetExcludePointProjectionOk

`func (o *MembershipTypeRulePointsDefinitionType) GetExcludePointProjectionOk() (*bool, bool)`

GetExcludePointProjectionOk returns a tuple with the ExcludePointProjection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludePointProjection

`func (o *MembershipTypeRulePointsDefinitionType) SetExcludePointProjection(v bool)`

SetExcludePointProjection sets ExcludePointProjection field to given value.

### HasExcludePointProjection

`func (o *MembershipTypeRulePointsDefinitionType) HasExcludePointProjection() bool`

HasExcludePointProjection returns a boolean if a field has been set.

### GetPercentagePoints

`func (o *MembershipTypeRulePointsDefinitionType) GetPercentagePoints() bool`

GetPercentagePoints returns the PercentagePoints field if non-nil, zero value otherwise.

### GetPercentagePointsOk

`func (o *MembershipTypeRulePointsDefinitionType) GetPercentagePointsOk() (*bool, bool)`

GetPercentagePointsOk returns a tuple with the PercentagePoints field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercentagePoints

`func (o *MembershipTypeRulePointsDefinitionType) SetPercentagePoints(v bool)`

SetPercentagePoints sets PercentagePoints field to given value.

### HasPercentagePoints

`func (o *MembershipTypeRulePointsDefinitionType) HasPercentagePoints() bool`

HasPercentagePoints returns a boolean if a field has been set.

### GetPoints

`func (o *MembershipTypeRulePointsDefinitionType) GetPoints() int32`

GetPoints returns the Points field if non-nil, zero value otherwise.

### GetPointsOk

`func (o *MembershipTypeRulePointsDefinitionType) GetPointsOk() (*int32, bool)`

GetPointsOk returns a tuple with the Points field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPoints

`func (o *MembershipTypeRulePointsDefinitionType) SetPoints(v int32)`

SetPoints sets Points field to given value.

### HasPoints

`func (o *MembershipTypeRulePointsDefinitionType) HasPoints() bool`

HasPoints returns a boolean if a field has been set.

### GetPointsRoundingFlag

`func (o *MembershipTypeRulePointsDefinitionType) GetPointsRoundingFlag() PointsRoundingFlagType`

GetPointsRoundingFlag returns the PointsRoundingFlag field if non-nil, zero value otherwise.

### GetPointsRoundingFlagOk

`func (o *MembershipTypeRulePointsDefinitionType) GetPointsRoundingFlagOk() (*PointsRoundingFlagType, bool)`

GetPointsRoundingFlagOk returns a tuple with the PointsRoundingFlag field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRoundingFlag

`func (o *MembershipTypeRulePointsDefinitionType) SetPointsRoundingFlag(v PointsRoundingFlagType)`

SetPointsRoundingFlag sets PointsRoundingFlag field to given value.

### HasPointsRoundingFlag

`func (o *MembershipTypeRulePointsDefinitionType) HasPointsRoundingFlag() bool`

HasPointsRoundingFlag returns a boolean if a field has been set.

### GetRevenueUnits

`func (o *MembershipTypeRulePointsDefinitionType) GetRevenueUnits() int32`

GetRevenueUnits returns the RevenueUnits field if non-nil, zero value otherwise.

### GetRevenueUnitsOk

`func (o *MembershipTypeRulePointsDefinitionType) GetRevenueUnitsOk() (*int32, bool)`

GetRevenueUnitsOk returns a tuple with the RevenueUnits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueUnits

`func (o *MembershipTypeRulePointsDefinitionType) SetRevenueUnits(v int32)`

SetRevenueUnits sets RevenueUnits field to given value.

### HasRevenueUnits

`func (o *MembershipTypeRulePointsDefinitionType) HasRevenueUnits() bool`

HasRevenueUnits returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


