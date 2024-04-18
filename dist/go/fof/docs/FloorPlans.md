# FloorPlans

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FloorPlansDetails** | Pointer to [**[]FloorPlanType**](FloorPlanType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFloorPlans

`func NewFloorPlans() *FloorPlans`

NewFloorPlans instantiates a new FloorPlans object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFloorPlansWithDefaults

`func NewFloorPlansWithDefaults() *FloorPlans`

NewFloorPlansWithDefaults instantiates a new FloorPlans object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFloorPlansDetails

`func (o *FloorPlans) GetFloorPlansDetails() []FloorPlanType`

GetFloorPlansDetails returns the FloorPlansDetails field if non-nil, zero value otherwise.

### GetFloorPlansDetailsOk

`func (o *FloorPlans) GetFloorPlansDetailsOk() (*[]FloorPlanType, bool)`

GetFloorPlansDetailsOk returns a tuple with the FloorPlansDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFloorPlansDetails

`func (o *FloorPlans) SetFloorPlansDetails(v []FloorPlanType)`

SetFloorPlansDetails sets FloorPlansDetails field to given value.

### HasFloorPlansDetails

`func (o *FloorPlans) HasFloorPlansDetails() bool`

HasFloorPlansDetails returns a boolean if a field has been set.

### GetLinks

`func (o *FloorPlans) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FloorPlans) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FloorPlans) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FloorPlans) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FloorPlans) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FloorPlans) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FloorPlans) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FloorPlans) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


