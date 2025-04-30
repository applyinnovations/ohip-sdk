# PointsRejectionReasons

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PointsRejectionReason** | Pointer to [**PointsRejectionReasonsType**](PointsRejectionReasonsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPointsRejectionReasons

`func NewPointsRejectionReasons() *PointsRejectionReasons`

NewPointsRejectionReasons instantiates a new PointsRejectionReasons object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPointsRejectionReasonsWithDefaults

`func NewPointsRejectionReasonsWithDefaults() *PointsRejectionReasons`

NewPointsRejectionReasonsWithDefaults instantiates a new PointsRejectionReasons object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPointsRejectionReason

`func (o *PointsRejectionReasons) GetPointsRejectionReason() PointsRejectionReasonsType`

GetPointsRejectionReason returns the PointsRejectionReason field if non-nil, zero value otherwise.

### GetPointsRejectionReasonOk

`func (o *PointsRejectionReasons) GetPointsRejectionReasonOk() (*PointsRejectionReasonsType, bool)`

GetPointsRejectionReasonOk returns a tuple with the PointsRejectionReason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRejectionReason

`func (o *PointsRejectionReasons) SetPointsRejectionReason(v PointsRejectionReasonsType)`

SetPointsRejectionReason sets PointsRejectionReason field to given value.

### HasPointsRejectionReason

`func (o *PointsRejectionReasons) HasPointsRejectionReason() bool`

HasPointsRejectionReason returns a boolean if a field has been set.

### GetLinks

`func (o *PointsRejectionReasons) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PointsRejectionReasons) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PointsRejectionReasons) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PointsRejectionReasons) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PointsRejectionReasons) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PointsRejectionReasons) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PointsRejectionReasons) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PointsRejectionReasons) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


