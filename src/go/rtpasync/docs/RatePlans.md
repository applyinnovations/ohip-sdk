# RatePlans

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**RatePlans** | Pointer to [**[]RatePlanType**](RatePlanType.md) | Rate plan code details to be created. | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRatePlans

`func NewRatePlans() *RatePlans`

NewRatePlans instantiates a new RatePlans object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlansWithDefaults

`func NewRatePlansWithDefaults() *RatePlans`

NewRatePlansWithDefaults instantiates a new RatePlans object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RatePlans) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlans) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlans) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlans) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlans

`func (o *RatePlans) GetRatePlans() []RatePlanType`

GetRatePlans returns the RatePlans field if non-nil, zero value otherwise.

### GetRatePlansOk

`func (o *RatePlans) GetRatePlansOk() (*[]RatePlanType, bool)`

GetRatePlansOk returns a tuple with the RatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlans

`func (o *RatePlans) SetRatePlans(v []RatePlanType)`

SetRatePlans sets RatePlans field to given value.

### HasRatePlans

`func (o *RatePlans) HasRatePlans() bool`

HasRatePlans returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlans) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlans) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlans) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlans) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


