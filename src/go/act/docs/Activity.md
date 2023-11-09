# Activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityDetails** | Pointer to [**ActivityDetailsType**](ActivityDetailsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewActivity

`func NewActivity() *Activity`

NewActivity instantiates a new Activity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityWithDefaults

`func NewActivityWithDefaults() *Activity`

NewActivityWithDefaults instantiates a new Activity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityDetails

`func (o *Activity) GetActivityDetails() ActivityDetailsType`

GetActivityDetails returns the ActivityDetails field if non-nil, zero value otherwise.

### GetActivityDetailsOk

`func (o *Activity) GetActivityDetailsOk() (*ActivityDetailsType, bool)`

GetActivityDetailsOk returns a tuple with the ActivityDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityDetails

`func (o *Activity) SetActivityDetails(v ActivityDetailsType)`

SetActivityDetails sets ActivityDetails field to given value.

### HasActivityDetails

`func (o *Activity) HasActivityDetails() bool`

HasActivityDetails returns a boolean if a field has been set.

### GetLinks

`func (o *Activity) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Activity) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Activity) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Activity) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Activity) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Activity) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Activity) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Activity) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


