# AwardDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**ProfileAwards** | Pointer to [**AwardsType**](AwardsType.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewAwardDetails

`func NewAwardDetails() *AwardDetails`

NewAwardDetails instantiates a new AwardDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAwardDetailsWithDefaults

`func NewAwardDetailsWithDefaults() *AwardDetails`

NewAwardDetailsWithDefaults instantiates a new AwardDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *AwardDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AwardDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AwardDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AwardDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetProfileAwards

`func (o *AwardDetails) GetProfileAwards() AwardsType`

GetProfileAwards returns the ProfileAwards field if non-nil, zero value otherwise.

### GetProfileAwardsOk

`func (o *AwardDetails) GetProfileAwardsOk() (*AwardsType, bool)`

GetProfileAwardsOk returns a tuple with the ProfileAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileAwards

`func (o *AwardDetails) SetProfileAwards(v AwardsType)`

SetProfileAwards sets ProfileAwards field to given value.

### HasProfileAwards

`func (o *AwardDetails) HasProfileAwards() bool`

HasProfileAwards returns a boolean if a field has been set.

### GetWarnings

`func (o *AwardDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AwardDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AwardDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AwardDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


