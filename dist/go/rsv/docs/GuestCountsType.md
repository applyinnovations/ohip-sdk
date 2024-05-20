# GuestCountsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Adults** | Pointer to **int32** | Defines the number of Adults. | [optional] 
**ChildAges** | Pointer to [**[]ChildAgeType**](ChildAgeType.md) | Age of a child in years. | [optional] 
**ChildBuckets** | Pointer to [**ChildBucketsType**](ChildBucketsType.md) |  | [optional] 
**Children** | Pointer to **int32** | Defines the number of Children. | [optional] 

## Methods

### NewGuestCountsType

`func NewGuestCountsType() *GuestCountsType`

NewGuestCountsType instantiates a new GuestCountsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestCountsTypeWithDefaults

`func NewGuestCountsTypeWithDefaults() *GuestCountsType`

NewGuestCountsTypeWithDefaults instantiates a new GuestCountsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAdults

`func (o *GuestCountsType) GetAdults() int32`

GetAdults returns the Adults field if non-nil, zero value otherwise.

### GetAdultsOk

`func (o *GuestCountsType) GetAdultsOk() (*int32, bool)`

GetAdultsOk returns a tuple with the Adults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAdults

`func (o *GuestCountsType) SetAdults(v int32)`

SetAdults sets Adults field to given value.

### HasAdults

`func (o *GuestCountsType) HasAdults() bool`

HasAdults returns a boolean if a field has been set.

### GetChildAges

`func (o *GuestCountsType) GetChildAges() []ChildAgeType`

GetChildAges returns the ChildAges field if non-nil, zero value otherwise.

### GetChildAgesOk

`func (o *GuestCountsType) GetChildAgesOk() (*[]ChildAgeType, bool)`

GetChildAgesOk returns a tuple with the ChildAges field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildAges

`func (o *GuestCountsType) SetChildAges(v []ChildAgeType)`

SetChildAges sets ChildAges field to given value.

### HasChildAges

`func (o *GuestCountsType) HasChildAges() bool`

HasChildAges returns a boolean if a field has been set.

### GetChildBuckets

`func (o *GuestCountsType) GetChildBuckets() ChildBucketsType`

GetChildBuckets returns the ChildBuckets field if non-nil, zero value otherwise.

### GetChildBucketsOk

`func (o *GuestCountsType) GetChildBucketsOk() (*ChildBucketsType, bool)`

GetChildBucketsOk returns a tuple with the ChildBuckets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildBuckets

`func (o *GuestCountsType) SetChildBuckets(v ChildBucketsType)`

SetChildBuckets sets ChildBuckets field to given value.

### HasChildBuckets

`func (o *GuestCountsType) HasChildBuckets() bool`

HasChildBuckets returns a boolean if a field has been set.

### GetChildren

`func (o *GuestCountsType) GetChildren() int32`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *GuestCountsType) GetChildrenOk() (*int32, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *GuestCountsType) SetChildren(v int32)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *GuestCountsType) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


