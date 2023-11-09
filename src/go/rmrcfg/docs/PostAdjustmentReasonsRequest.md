# PostAdjustmentReasonsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentReasons** | Pointer to [**RoomRotationAdjustmentReasonsType**](RoomRotationAdjustmentReasonsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostAdjustmentReasonsRequest

`func NewPostAdjustmentReasonsRequest() *PostAdjustmentReasonsRequest`

NewPostAdjustmentReasonsRequest instantiates a new PostAdjustmentReasonsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAdjustmentReasonsRequestWithDefaults

`func NewPostAdjustmentReasonsRequestWithDefaults() *PostAdjustmentReasonsRequest`

NewPostAdjustmentReasonsRequestWithDefaults instantiates a new PostAdjustmentReasonsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdjustmentReasons

`func (o *PostAdjustmentReasonsRequest) GetAdjustmentReasons() RoomRotationAdjustmentReasonsType`

GetAdjustmentReasons returns the AdjustmentReasons field if non-nil, zero value otherwise.

### GetAdjustmentReasonsOk

`func (o *PostAdjustmentReasonsRequest) GetAdjustmentReasonsOk() (*RoomRotationAdjustmentReasonsType, bool)`

GetAdjustmentReasonsOk returns a tuple with the AdjustmentReasons field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdjustmentReasons

`func (o *PostAdjustmentReasonsRequest) SetAdjustmentReasons(v RoomRotationAdjustmentReasonsType)`

SetAdjustmentReasons sets AdjustmentReasons field to given value.

### HasAdjustmentReasons

`func (o *PostAdjustmentReasonsRequest) HasAdjustmentReasons() bool`

HasAdjustmentReasons returns a boolean if a field has been set.

### GetLinks

`func (o *PostAdjustmentReasonsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAdjustmentReasonsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAdjustmentReasonsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAdjustmentReasonsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAdjustmentReasonsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAdjustmentReasonsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAdjustmentReasonsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAdjustmentReasonsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


